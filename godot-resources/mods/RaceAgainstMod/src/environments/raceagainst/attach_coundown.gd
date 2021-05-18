extends RichTextLabel

export var countdown_seconds = 5
var start = false
onready var timer = $Timer

func _ready():
	timer.start()
	
func _process(delta):
		if countdown_seconds > 0:
			set_text(" "+str(countdown_seconds))
		else:
			set_text("Go!")

func _on_Timer_timeout():
	if countdown_seconds > 0:
		countdown_seconds-=1
	else:
		queue_free()
