extends Node

export var power = 500
export var enable_boost = true
export var boost_direction = Vector3(0,0,-5)

func _process(delta):
	if enable_boost == true:
		get_parent().visible = true
	else:
		get_parent().visible = false

func _on_Area_body_entered(body: Node):
	if body.has_method("_integrate_forces") && enable_boost:
		var direction = boost_direction
		var global_direction = body.global_transform.basis.xform(direction)
		body.add_force(global_direction * power, Vector3(0,0,0))
