#imports
import pandas as pd


#Reads the csv file and tranfers the data to the Pandas DataFrame,
# which is a two-dimensional tabular data
animes_data = pd.read_csv('../csv_files/animes.csv')

#Updates the animes_data DataFrame with only the ranked animes
#This line has to be here, before the anime column reference lines, in order to use these references to the updated DataFrame
animes_data = animes_data.loc[animes_data['ranked'] <= animes_data['ranked'].max()]

#Removing duplicate data from DataFrame
animes_data = animes_data.drop_duplicates()

#Separating "aired" column into "start_date" and "end_date" columns and then removing "aired"
animes_data = animes_data.join(animes_data['aired'].str.split('to', 1, expand=True).rename(columns={0:'start_date', 1:'end_date'}))
animes_data = animes_data.drop(columns=['aired'])
# print("\n")
# print(animes_data.head())

#Creating variables refering to the respective columns in the anime.csv
uid = animes_data['uid']
title = animes_data['title']
synopsis = animes_data['synopsis']
genre = animes_data['genre']
episodes = animes_data['episodes']
members = animes_data['members']
popularity = animes_data['popularity']
ranked = animes_data['ranked']
score = animes_data['score']
img_url = animes_data['img_url']
link = animes_data['link']
start_date = animes_data['start_date']
end_date = animes_data['end_date']

print(episodes.min(), episodes.max()) #Ranked column minimum and maximum values
# print(animes_data.shape) #Checks the shape of the DataFrame
# print(animes_data.info())