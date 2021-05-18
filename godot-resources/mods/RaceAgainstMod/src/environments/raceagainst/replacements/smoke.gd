extends Spatial


onready var smce = get_parent().get_parent().get_parent()

# Called when the node enters the scene tree for the first time.
func _ready():
	pass # Replace with function body.


# Called every frame. 'delta' is the elapsed time since the previous frame.
func _process(delta):
	if Input.is_action_pressed("ui_right") || Input.is_action_pressed("ui_left"):
		$smoke/Smoke.emitting = true
		$smoke/Smoke2.emitting = true
	else:
		$smoke/Smoke.emitting = false
		$smoke/Smoke2.emitting = false

