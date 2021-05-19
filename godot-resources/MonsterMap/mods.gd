extends Node

var headlights = preload("res://src/Group2_Godot_resources/MonsterMap/Headlights.tscn")

# Declare member variables here. Examples:
# var a = 2
# var b = "text"


# Called when the node enters the scene tree for the first time.
func _ready():
	pass # Replace with function body.


# Called every frame. 'delta' is the elapsed time since the previous frame.
#func _process(delta):
#	pass


func _on_Area_body_entered(body: RigidBody):
	var smce = instance_from_id(body.get_instance_id())
	smce.add_child(headlights.instance())
	smce.collision_layer = 3
