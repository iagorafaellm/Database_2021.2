#imports
import pandas as pd
import pymysql
from sqlalchemy import create_engine

#Creating a connection with mysql database 
# engine = create_engine("mysql+pymysql://" + 'root' + ":" + 'MyUltraSecretPassword' + "@" + 'localhost' + "/" + 'databasename')

#Reads the csv file and tranfers the data to the Pandas DataFrame, which is a two-dimensional tabular data
#Columns: uid, title, synopsis, genre, aired, episodes, members, popularity, ranked, score, img_url, link
animes_data = pd.read_csv('../csv_files/animes.csv')

#Updates the animes_data DataFrame with only the ranked animes
#This line has to be here, before the anime column reference lines, in order to use these references to the updated DataFrame
animes_data = animes_data.loc[animes_data['ranked'] <= animes_data['ranked'].max()]

#Removing duplicate data from DataFrame
animes_data = animes_data.drop_duplicates(subset=['uid'])

#Separating "aired" column into "start_date" and "end_date" columns and then removing "aired"
animes_data = animes_data.join(animes_data['aired'].str.split('to', 1, expand=True).rename(columns={0:'start_date', 1:'end_date'}))
animes_data = animes_data.drop(columns=['aired'])
# print("\n")
# print(animes_data.head())

#Creating variables refering to the respective columns in the anime.csv
uid = animes_data['uid']
genre = animes_data['genre']
ranked = animes_data['ranked']

#Creating a dataframe with animes primary keys and it´s respective genres 
genres = genre.tolist()
ids = uid.tolist()
ranks = ranked.tolist()
genre_ids = []
genre_genres = []
genre_ranks = []

for i in range(0,len(ids)):
    this_genre = genres[i].replace('[','').replace(']','').replace("'","").replace(' ','').split(',')
    for j in range(0, len(this_genre)):
        genre_ids.append(ids[i])
        genre_ranks.append(ranks[i])
        genre_genres.append(this_genre[j])

genres_data = pd.DataFrame(data={"fk_uids":genre_ids, "fk_ranks":genre_ranks, "genre":genre_genres})

# #Sending dataframes to mysql database
# animes_data.to_sql('animes_testing', con=engine, if_exists='replace')
# genres_data.to_sql('anime_genres', con=engine, if_exists='replace')