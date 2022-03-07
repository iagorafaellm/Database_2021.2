#imports
import pandas as pd
import pymysql
from sqlalchemy import create_engine

#Creating a connection with mysql database 
engine = create_engine("mysql+pymysql://" + 'root' + ":" + 'CeraVe#35100' + "@" + 'localhost' + "/" + 'maldb')

#Reads the csv file and tranfers the data to the Pandas DataFrame, which is a two-dimensional tabular data
#Columns: profile, gender, birthday, favorites_anime, link
profiles_data = pd.read_csv('../csv_files/profiles.csv')

#Removing duplicate data from DataFrame
profiles_data = profiles_data.drop_duplicates(subset=['profile'])

#Creating variables refering to the respective columns in the profiles_data.csv
profile = profiles_data['profile']
favorites_anime = profiles_data['favorites_anime']

#Creating a dataframe with with animes and profiles id for the "favorite" table
favorites = favorites_anime.tolist()
profiles = profile.tolist()
favorites_profile = []
favorites_anime_ids = []

for i in range(0, len(profiles)):
    this_favorites = favorites[i].replace('[','').replace(']','').replace("'","").replace(' ','').split(',')
    for j in range(0, len(this_favorites)):
        if this_favorites[j] != '':
            favorites_profile.append(profiles[i])
            favorites_anime_ids.append(this_favorites[j])

favorites_data = pd.DataFrame(data={"fk_profiles": favorites_profile, "fk_animes_uid": favorites_anime_ids})

#Sending dataframes to mysql database
profiles_data.to_sql('profiles_testing', con=engine, if_exists='replace')
favorites_data.to_sql('profile_favorites', con=engine, if_exists='replace')