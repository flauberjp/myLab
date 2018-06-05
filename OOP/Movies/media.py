import webbrowser

class Video():
    """ Contains details of a video. """
    def __init__(self,
                 video_title,
                 video_duration):
        self.title = video_title
        self.duration = video_duration

    def show_info(self):
        print("Title - " + self.title)
        print("Duration - " + str(self.duration))
        
class Movie(Video):
    """ Contains details of a movie. """
    def __init__(self,
                 movie_title,
                 movie_duration,
                 movie_storyline,
                 poster_image,
                 youtube_trailer):
        Video.__init__(self, movie_title, movie_duration)
        self.storyline = movie_storyline
        self.poster_image_url = poster_image
        self.trailer_youtube_url = youtube_trailer        

    def show_trailer(self):
        webbrowser.open(self.trailer_youtube_url)

    def show_info(self):
        print("Title - " + self.title)
        print("Duration - " + str(self.duration) + "s")
        print("storyline - " + self.storyline)
        print("Poster link - " + self.poster_image_url)
        print("Trailer link - " + self.trailer_youtube_url)


print(Movie.__module__)
        
        
