#imports
import pandas as pd


#Reads the csv file and tranfers the data to the Pandas DataFrame,
# which is a two-dimensional tabular data
animes_data = pd.read_csv('../csv_files/animes.csv')
profiles_data = pd.read_csv('../csv_files/profiles.csv')
reviews_data = pd.read_csv('../csv_files/reviews.csv')

#Updates the animes_data DataFrame with only the ranked animes
#This line has to be here, before the anime column reference lines, in order to use these references to the updated DataFrame
animes_data = animes_data.loc[animes_data['ranked'] <= animes_data['ranked'].max()]

#References a variable to the respective column in the anime.csv
uid = animes_data['uid']
title = animes_data['title']
synopsis = animes_data['synopsis']
genre = animes_data['genre']
aired = animes_data['aired']
episodes = animes_data['episodes']
members = animes_data['members']
popularity = animes_data['popularity']
ranked = animes_data['ranked']
score = animes_data['score']
img_url = animes_data['img_url']
link = animes_data['link']

# print(ranked.min(), ranked.max()) #Ranked column minimum and maximum values
# print(animes_data.shape) #Checks the shape of the DataFrame


#Profiles: profile,gender,birthday,favorites_anime,link

#Reviews: uid,profile,anime_uid,text,score,scores,link