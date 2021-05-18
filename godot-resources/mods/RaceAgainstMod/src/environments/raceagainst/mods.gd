extends Node

var countdown = preload("res://src/environments/raceagainst/Countdown.tscn")
var stats = preload("res://src/environments/raceagainst/smce_camera_times.tscn")
var minimap = preload("res://src/environments/raceagainst/minimap.tscn")
var smceMinimapCar = preload("res://src/environments/raceagainst/replacements/minimapSMCE.tscn")
var newBody = preload("res://src/environments/raceagainst/replacements/body.tscn")
var music = preload("res://src/environments/raceagainst/Music.tscn")
var http_inject = preload("res://src/environments/raceagainst/HTTP.tscn")
onready var root = get_tree().get_root()
onready var smce_camera = root.get_camera()
onready var boosters = $boosters/Boost
var server
onready var race_stats = get_parent().get_node("Race_Stats")
var stats_instance = stats.instance()
var minimap_instance = minimap.instance()
var smceMinimapCar_instance = smceMinimapCar.instance()
var camera_update = true
var max_speed = 1000000
export var motor_force = 4 
export var damper_force = 4 
export var spring_force = 150
export var weight = 20
export var gravity = 3
var level
	
func _ready():
	var server = get_tree().get_root().get_node_or_null("HTTP/HTTPRequest")
	if server == null:
		get_tree().get_root().add_child(http_inject.instance())
		get_tree().get_root().get_camera().add_child(music.instance())
	server = get_tree().get_root().get_node_or_null("HTTP/HTTPRequest")
	get_tree().get_root().get_node("/root/Master/World/Camera/InterpolatedCamera").set_cull_mask(524287)

func _process(delta):
	var server = get_tree().get_root().get_node_or_null("HTTP/HTTPRequest")
	if server == null:
		pass
	else:
		if server.difficulty == "Extreme":
			level = "Extreme"
			motor_force = 1
			boosters.enable_boost = false
			race_stats.race_laps = server.laps
		elif server.difficulty == "BossMode":
			level = "BossMode"
			motor_force = 4
			boosters.enable_boost = false
			race_stats.race_laps = server.laps
		elif server.difficulty == "Hard":
			level = "Hard"
			motor_force = 5
			boosters.enable_boost = false
			race_stats.race_laps = server.laps
		elif server.difficulty == "Medium":
			level = "Medium"
			motor_force = 5
			boosters.enable_boost = true
			boosters.power = 500
			race_stats.race_laps = server.laps
		elif server.difficulty == "Easy" || server == null:
			level = "Easy"
			motor_force = 5
			boosters.enable_boost = true
			boosters.power = 1000
			race_stats.race_laps = server.laps
		else:
			level = "Easy"
			motor_force = 5
			boosters.enable_boost = true
			race_stats.race_laps = server.laps

func _replace_car_model(car):
	smceMinimapCar_instance = smceMinimapCar.instance()
	if car.get_node_or_null("Hull") != null:
		car.get_node("Hull").queue_free()
		car.add_child(newBody.instance())
		car.get_node("Sprite3D").queue_free()
		car.get_node("LeftBack/wheel/wheel").queue_free()
		car.get_node("RightBack/wheel/wheel").queue_free()
		car.get_node("LeftFront/wheel/wheel").queue_free()
		car.get_node("RightFront/wheel/wheel").queue_free()
		car.add_child(smceMinimapCar_instance)
	
func _overwrite_settings(car: RigidBody):
		car.get_node("LeftBack").max_speed = max_speed
		car.get_node("RightBack").max_speed = max_speed
		car.get_node("LeftFront").max_speed = max_speed
		car.get_node("RightFront").max_speed = max_speed
		car.get_node("LeftBack").spring_force = spring_force
		car.get_node("RightBack").spring_force = spring_force
		car.get_node("LeftFront").spring_force = spring_force
		car.get_node("RightFront").spring_force = spring_force
		car.get_node("LeftBack").motor_force = motor_force
		car.get_node("RightBack").motor_force = motor_force
		car.get_node("LeftFront").motor_force = motor_force
		car.get_node("RightFront").motor_force = motor_force
		car.get_node("LeftBack").damper_force = damper_force 
		car.get_node("RightBack").damper_force = damper_force 
		car.get_node("LeftFront").damper_force = damper_force 
		car.get_node("RightFront").damper_force = damper_force 
		car.gravity_scale = gravity
		car.weight = weight

func _overwrite_smce_camera(car: RigidBody):
	minimap_instance = minimap.instance()
	stats_instance = stats.instance()
	if car.get_node_or_null("Hull") != null:
		var front_camera = car.get_node("Attachments/Front Camera")
		front_camera.transform.origin = Vector3(0, 7, 7)
		front_camera.rotation_degrees = Vector3(-20,0,0)
		var view = car.get_node("Attachments/Front Camera/Viewport")
		view.get_camera().set_cull_mask(524287)
		view.add_child(countdown.instance())
		view.add_child(minimap_instance)
		view.add_child(stats_instance)
	
func _on_StartPlate_body_entered(body: RigidBody):
	if body.has_method("_integrate_forces"):
		var smce = instance_from_id(body.get_instance_id())
		if get_parent().get_node("Race_Stats").laps[get_parent().get_node("Race_Stats").player]["current"] > 0:
			var the_master = get_tree().get_root().get_node("/root/Master")
			the_master.load_profile(the_master.active_profile)	
		if !get_parent().get_node("Race_Stats").laps.has(body.get_instance_id()):
			get_parent().get_node("Race_Stats").set_player(body.get_instance_id())
		_replace_car_model(smce)
		_overwrite_settings(smce)
		_overwrite_smce_camera(smce)
