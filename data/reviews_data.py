#imports
import pandas as pd
import pymysql
from sqlalchemy import create_engine

#Creating a connection with mysql database 
engine = create_engine("mysql+pymysql://" + 'root' + ":" + 'CeraVe#35100' + "@" + 'localhost' + "/" + 'maldb')

#Reads the csv file and tranfers the data to the Pandas DataFrame, which is a two-dimensional tabular data
#Columns: uid, profile, anime_uid, text, score, scores, link
reviews_data = pd.read_csv('../csv_files/reviews.csv')

#Removing duplicate data from DataFrame
reviews_data = reviews_data.drop_duplicates(subset=['uid'])

#Dropping "text" column from reviews_data since it´s too big
reviews_data = reviews_data.drop(columns=['text'])

#Sending dataframes to mysql database
reviews_data.to_sql('reviews_testing', con=engine, if_exists='replace')