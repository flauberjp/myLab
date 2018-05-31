import urllib

def read_text():
    quotes = open(r"C:\Users\flaub\Documents\Projetos\myLab\OOP\profanity_editor\movie_quotes.txt")
    contents_of_file = quotes.read()
    print(contents_of_file)
    quotes.close()
    check_profanity(contents_of_file)
    # check_profanity("shit")

def check_profanity(text_to_check):
    connection = urllib.urlopen("http://www.wdylike.appspot.com/?q="+text_to_check)
    output = connection.read()
    print(output)
    connection.close()
    
read_text()
