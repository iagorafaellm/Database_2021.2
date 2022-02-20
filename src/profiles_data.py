#imports
import pandas as pd


#Reads the csv file and tranfers the data to the Pandas DataFrame,
# which is a two-dimensional tabular data
profiles_data = pd.read_csv('../csv_files/profiles.csv')

#Removing duplicate data from DataFrame
profiles_data = profiles_data.drop_duplicates()

#Creating variables refering to the respective columns in the profiles_data.csv
#Profiles: profile,gender,birthday,favorites_anime,link
#
#
#

#print(episodes.min(), episodes.max()) #Ranked column minimum and maximum values
# print(profiles_data.shape) #Checks the shape of the DataFrame
# print(profiles_data.info())
