extends StaticBody

onready var wall = $CollisionShape
onready var car_one = get_parent().get_parent().get_node("Bot/Ball")
onready var car_two = get_parent().get_parent().get_node("Bot2/Ball")
onready var car_three = get_parent().get_parent().get_node("Bot3/Ball")


# Called when the node enters the scene tree for the first time.
func _ready():
	add_collision_exception_with(car_one)
	add_collision_exception_with(car_two)
	add_collision_exception_with(car_three)

# Called every frame. 'delta' is the elapsed time since the previous frame.
#func _process(delta):
#	pass

func _on_Area1_body_exited(body: RigidBody):
	if body == car_one:
		pass
	elif body == car_two:
		pass
	elif body == car_three:
		pass
	else:
		pass
		#wall.disabled = false


func _on_Area_body_exited(body):
	if body == car_one:
		pass
	elif body == car_two:
		pass
	elif body == car_three:
		pass
	else:
		pass
		#wall.disabled = true
