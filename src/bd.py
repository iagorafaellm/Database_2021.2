#imports
import pandas as pd

#Reading the csv file and tranfers the data to the Pandas DataFrame,
# which is a two-dimensional tabular data
animes_data = pd.read_csv('../csv_files/animes.csv')
profiles_data = pd.read_csv('../csv_files/profiles.csv')
reviews_data = pd.read_csv('../csv_files/reviews.csv')

#Anime: uid,title,synopsis,genre,aired,episodes,members,
# popularity,ranked,score,img_url,link
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

#Profiles: profile,gender,birthday,favorites_anime,link

#Reviews: uid,profile,anime_uid,text,score,scores,link

# with open('../csv_files/reviews.csv', 'r') as reviews_file:
#     for line in reviews_file:
#         print(line)
#         break

# for rank in ranked:
#     if rank == "":
#         rank != ranked ""

# gundamAnime = animes_data.loc[title == "Gundam Build Fighters OVA"]
# print(gundamAnime)

# print(ranked.min(), ranked.max()) #Valores mínimo e máximo da coluna ranked

# print(animes_data.shape) #Checking the initial shape of the DataFrame

#Atualizando o Dataframe animes_data retirano todos os animes sem rank
# (animes com rank menor que o maior rank)
animes_data = animes_data.loc[ranked <= ranked.max()]
print(animes_data)

# print(animes_data.shape) #Checking the final shape of the DataFrame

# hentais = animes_data.loc[genre == "['Hentai']"] #
# print(hentais['uid'].head(), hentais['title'].head(), hentais['ranked'].head())

# animes_dataHentais = animes_data.loc[animes_data['genre'] == "['Hentai']"]
# print(animes_dataHentais['uid'].head(), animes_dataHentais['title'].head(), animes_dataHentais['ranked'].head())