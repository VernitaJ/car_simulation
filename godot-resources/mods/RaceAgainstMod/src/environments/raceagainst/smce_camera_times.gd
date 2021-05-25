extends RichTextLabel

func _ready():
	pass 

func _process(delta):
	var statusText = get_tree().get_root().get_node_or_null("/root/Master/World/RaceAgainst/Race_Stats")
	if statusText != null:
		set_text(statusText.generate_text())
