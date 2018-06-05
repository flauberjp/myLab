import fresh_tomatoes
import media

toy_story = media.Movie("Toy Story",
                        93,
                        "A story of a boy and his toys that come to life",
                        "http://www.impawards.com/1995/posters/toy_story_ver1.jpg",
                        "https://www.youtube.com/watch?v=KYz2wyBy3kc")
#print(toy_story.storyline)
avatar = media.Movie("Avatar",
                     221,
                     "A marine on an alien planet",
                     "http://www.impawards.com/2009/posters/avatar_ver6_xlg.jpg",
                     "https://www.youtube.com/watch?v=5PSNL1qE6VY")
#print(avatar.storyline)
#avatar.show_trailer()
the_300_spartans = media.Movie(
    "300",
    150,
    "300 spartans to defend their home land against the conqueror Xerxes and his horde of millions soldiers",
    "https://www.movieposter.com/posters/archive/main/46/MPW-23465",
    "https://www.youtube.com/watch?v=UrIbxk7idYA")
#the_300_spartans.show_trailer()

gattaca = media.Movie(
    "Gattaca",
    148,
    "Is a humam being determined by the DNA?",
    "https://images-na.ssl-images-amazon.com/images/I/51QM82SNT3L.jpg",
    "https://www.youtube.com/watch?v=hWjlUj7Czlk")

matrix = media.Movie(
    "Matrix",
    150,
    "Machines dominated the humans, transformed them in batteries, is that true? Why we allowed it?",
    "https://www.movieposter.com/posters/archive/main/9/A70-4902",
    "https://www.youtube.com/watch?v=m8e-FF8MsqU")


the_godfather = media.Movie(
    "The Godfather",
    94,
    "See how italian mafia works",
    "http://img.goldposter.com/2015/04/The-Godfather_poster_goldposter_com_2.jpg",
    "https://www.youtube.com/watch?v=sY1S34973zA")




movies =[toy_story, avatar, the_300_spartans, gattaca, matrix, the_godfather]

def main():
    """Função principal da aplicação. """
    fresh_tomatoes.open_movies_page(movies)

if __name__ == "__main__":
    main()
    



