extends RichTextLabel

var start = false
var time = 0
var player 
var car_one
var car_two
var car_three
var minimapText
var laps: Dictionary
var data_send = true
export var race_laps = 3

func _ready():
	time = 0
	player = null
	car_one = get_parent().get_node("Bot/Ball").get_instance_id()
	car_two = get_parent().get_node("Bot2/Ball").get_instance_id()
	car_three = get_parent().get_node("Bot3/Ball").get_instance_id()
	laps = {
		car_one: {
			"name": "Green",
			"course": "Race Against The Machine",
			"current": 0,
			"finished": false,
			"finish-time": "",
			"time": "",
			"placement": "",
			"laps": {},
		},
		car_two: {
			"name": "Yellow",
			"course": "Race Against The Machine",
			"current": 0,
			"finished": false,
			"time": "",
			"placement": "",
			"laps": {},
		},
		car_three: {
			"name": "Red",
			"course": "Race Against The Machine",
			"current": 0,
			"finished": false,
			"time": "",
			"placement": "",
			"laps": {},
		},
		player: {		
			"name": "Player",
			"course": "Race Against The Machine",
			"current": 0,
			"finished": false,
			"time": "",
			"placement": "",
			"laps": {},
			"coordinates": []
		}
	}

func update_player_name(new_name):
	laps[player]["name"] = str(new_name)

func set_player(smce):
	laps.erase(player)
	player = smce
	laps[player] = {		
		"name": "Player",
		"course": "Race Against The Machine",
		"current": 0,
		"finished": false,
		"time": "",
		"placement": "",
		"laps": {},
		"coordinates": []
	}

func _log_coordinates():
	if player != null:
		laps[player]["coordinates"].append(player.get_translation())

func get_time():
	var seconds = fmod(time,60)
	var minutes = fmod(time, 60*60) / 60
	var hours = fmod(time, 24) / 3600
	var elapsed = "%02d:%02d:%02d" % [hours, minutes, seconds]
	return elapsed

func get_place(car):
	var n = 1
	for i in laps:
		if !laps[i]["placement"] == "":
			n+=1
	laps[car]["placement"] = " #" + str(n)

func finish_race():
	var done = true
	for cars in laps:
		if laps[cars]["finished"] == false:
			done = false
	return done

func get_car_stats(car):
	if car != null:
		if laps[car]["current"] > 0 && laps[car]["current"] != race_laps:
			return laps[car]["name"] + " Lap: " + str(laps[car]["current"]) + "\n"
		elif laps[car]["current"] == race_laps:
			if !laps[car]["finished"]:
				get_place(car)
				laps[car]["finished"] = true
				laps[car]["time"] = get_time()
			if car != player:
				instance_from_id(car).get_parent().set_stop()
			return laps[car]["name"] + " Finish: " + str(laps[car]["laps"][laps[car]["current"]]) + laps[car]["placement"] + "\n"
		elif laps[car]["current"] > race_laps:
			return laps[car]["name"] + " Finish: " + str(laps[car]["laps"][laps[car]["current"]]) + laps[car]["placement"] + "\n"
		else:
			return ""
	
func generate_text():
	var difficulty = get_parent().get_node("mods").level
	var playerText = ""
	var greenText = get_car_stats(car_one)
	var yellowText = get_car_stats(car_two)
	var redText = get_car_stats(car_three)
	if player != null:
		playerText = get_car_stats(player)
	if difficulty == null:
		difficulty = ""
	return "Difficulty: " + difficulty + ", Race Laps: " + str(race_laps) + "\n" + "Time: " + get_time() + "\n\n" + greenText + yellowText + redText + playerText

func _process(delta):
	if finish_race():
		start = false
	if start:
		time += delta
	#_log_coordinates()
	set_text(generate_text())
	var http = get_tree().get_root().get_node("HTTP/HTTPRequest")
	update_player_name(http.username)
	if data_send:
		if laps[player]["current"] == race_laps:
			http = get_tree().get_root().get_node("HTTP/HTTPRequest")
			http.send_data(laps[player], http.server)
			data_send = false

func _log_laps(car):
	laps[car]["current"] += 1
	laps[car]["laps"][laps[car]["current"]] = get_time()
	
func _on_FinishLine_body_exited(body: Node) -> void:
	if body.get_instance_id() == car_one:
		_log_laps(car_one)
	elif body.get_instance_id()  == car_two:
		_log_laps(car_two)
	elif body.get_instance_id()  == car_three:
		_log_laps(car_three)
	else:
		_log_laps(player)

func _on_Timer_tree_exited():
	start = true
