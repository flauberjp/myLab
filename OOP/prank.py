import os

def rename_files():
    # STEP 1: What is the directory where the photos are? (I am assuming all would be on a same place);
    # The photos to be processed are located on this folder (by this time hardcoded):
    # C:\Users\flaub\Documents\Projetos\myLab\OOP\secrete_message_photos\original
    photos_path = r"C:\Users\flaub\Documents\Projetos\myLab\OOP\surpresa"

    # STEP 2: Get a list of all files;
    file_list = os.listdir(photos_path)    


    # STEP 3: Loop on that list, and for each file, rename it in a specific way.
    for file_name in file_list:
        original_photo_path = photos_path + "\\" + file_name
        print("Old Name - " + original_photo_path)
        processed_photo_path = photos_path + "\\" + file_name.translate(None, "0123456789")
        print("New Name - " + original_photo_path)
        os.rename(original_photo_path, processed_photo_path)

rename_files()
