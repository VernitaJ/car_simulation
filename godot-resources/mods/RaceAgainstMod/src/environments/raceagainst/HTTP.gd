extends HTTPRequest

var headers = ["Content-Type: application/json"]
var server = "http://127.0.0.1:3002"
var website_settings = "http://127.0.0.1:3002/godot"
var ssl = false
var response
var difficulty = "Easy"
var laps = 2
var map = "Race Against The Machine"
var reload = false
var change_map = false

func send_data(msg, server):
	var error = request(server, headers, ssl, HTTPClient.METHOD_POST, to_json(msg))
	if error != OK:
		push_error("An error occurred in the HTTP request.")
		
func put_data(difficulty, laps, map):
	var msg: Dictionary = {
		"difficulty": difficulty,
		"laps": laps,
		"map": map,
	}
	var error = request(website_settings, headers, ssl, HTTPClient.METHOD_PUT, to_json(msg))
	if error != OK:
		push_error("An error occurred in the HTTP request.")

func recieve_data():
	# Perform a GET request. The URL below returns JSON as of writing.
	var error = request(website_settings)
	if error != OK:
		push_error("An error occurred in the HTTP request.")


# Called when the HTTP request is completed.
func _on_request_completed(result, response_code, headers, body):
	response = parse_json(body.get_string_from_utf8())
	if !response.has("command"):
		difficulty = response[0]["difficulty"]
		laps = int(response[0]["laps"])
		if laps < 2:
			laps = 2
		map = response[0]["map"]

func _ready():
	connect("request_completed", self, "_on_request_completed")

func _process(delta):
	pass

func _on_query_timeout():
	recieve_data()
