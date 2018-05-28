import turtle

def draw_square(window, initial_angle = 0):
    brad = turtle.Turtle()
    brad.color("green")
    brad.goto(-300, 60)
    #brad.shape("square")
    brad.color("blue")
    brad.speed("fastest")

    brad.right(initial_angle)
    
    count = 0
    while(count < 4):
        brad.forward(40)
        brad.right(90)
        count = count + 1

def draw_circle(window):
    jenni = turtle.Turtle()
    jenni.color("green")
    jenni.goto(-300, 0)
    #jenni.shape("circle")
    jenni.color("red")
    jenni.speed("slow")
    
    jenni.circle(60, 360)
    jenni.color("green")
    jenni.goto(0, 0)



def draw_triangle(window):
    triangle = turtle.Turtle()
    triangle.color("green")
    triangle.goto(-300, 60)
    triangle.goto(-300, -50)
    
    #triangle.shape("triangle")
    triangle.color("purple")
    triangle.speed("slow")

    triangle.left(-5)
    triangle.forward(-35)
    triangle.left(135)
    triangle.forward(-50)
    triangle.left(135)
    triangle.forward(-35)

def draw_bole(window):
    bole = turtle.Turtle()
    bole.color("green")
    bole.goto(-300, 60)
    #bole.shape("arrow")
    bole.color("black")
    bole.speed("slow")
    
    bole.left(270)
    bole.forward(250)

def draw_my_initials(window):
    initials = turtle.Turtle()
    initials.color("green")
    initials.goto(-180, 60)
    #initial.shape("triangle")
    initials.color("purple")
    initials.speed("slow")

    # Letter F
    #--
    initials.forward(120)
    initials.right(180)
    initials.forward(120)
    #|
    initials.left(90)
    initials.forward(60)
    #-
    initials.left(90)
    initials.forward(60)    
    initials.right(180)
    initials.forward(60)
    #|
    initials.left(90)
    initials.forward(60)

    #New letter, initial position to draw
    initials.color("green")
    initials.left(90)
    initials.forward(180)
    initials.left(90)
    initials.forward(120)
    initials.right(90)
    initials.color("purple")

    # Letter F
    #--
    initials.forward(120)
    initials.right(180)
    initials.forward(120)
    #|
    initials.left(90)
    initials.forward(60)
    #-
    initials.left(90)
    initials.forward(60)    
    initials.right(180)
    initials.forward(60)
    #|
    initials.left(90)
    initials.forward(60)

    #New letter, initial position to draw
    initials.color("green")
    initials.left(90)
    initials.forward(180)
    initials.left(90)
    initials.forward(120)
    initials.right(90)
    initials.color("purple")

    # Letter L
    #|
    initials.right(90)
    initials.forward(120)
    #--
    initials.left(90)
    initials.forward(120) 

    #New letter, initial position to draw
    initials.color("green")
    initials.forward(60)
    initials.color("purple")

    # Letter L
    #|
    initials.left(90)
    initials.forward(120)    
    initials.right(135)
    initials.forward(40)
    initials.left(90)
    initials.forward(40)
    initials.right(135)
    initials.forward(120)    

def draw_flower(window):
    draw_triangle(window)
    draw_circle(window)
    draw_bole(window)
    for i in range(1, 72):
        draw_square(window, 5 * i)

    
window = turtle.Screen()
window.bgcolor("green")
draw_my_initials(window)
draw_flower(window)
window.exitonclick()
