def read_text(file_name):    
    quotes = open(file_name)
    contents_of_file = quotes.read()
    print(contents_of_file)
    quotes.close()

file_name = input(r"File name with its path (e.g. C:\temp\myfile.txt): ")
read_text(file_name);
