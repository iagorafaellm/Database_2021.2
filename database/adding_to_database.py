from sqlalchemy import create_engine

#Creating a connection with mysql database
engine = create_engine("mysql+pymysql://" + 'root' + ":" + 'CeraVe#35100' + "@" + 'localhost' + "/" + 'maldb')

#Table "Score_Anime"
with engine.connect() as con:
  con.execute(
    """
    INSERT INTO Score_Anime(ranked, anime_id, rating, members, popularity, title, synopsis, img_url, link, start_date, end_date, episodes)
    SELECT ranked, uid, score, members, popularity, title, synopsis, img_url, link, start_date, end_date, episodes FROM animes_testing
    """)

#Table "Profile"
with engine.connect() as con:
  con.execute(
    """
    INSERT INTO Profile(profile_id, gender, birthday, profile_url)
    SELECT profile, gender, birthday, link FROM profiles_testing
    """)

#Table "Review"
with engine.connect() as con:
  con.execute(
    """
    INSERT INTO Review(review_id, fk_Score_Anime_rank, fk_Score_Anime_anime_id, fk_Profile_profile_id, avg_score, overall_rating, link)
    SELECT reviews_testing.uid, ranked, anime_uid, profile, reviews_testing.score, scores, reviews_testing.link FROM reviews_testing JOIN animes_testing ON anime_uid=animes_testing.uid
    """)

#Table "Genre"
with engine.connect() as con:
  con.execute(
    """
    INSERT INTO Genre(fk_Score_Anime_rank, fk_Score_Anime_anime_id, genre)
    SELECT fk_ranks, fk_uids, genre FROM anime_genres
    """)

#Table "Favorite"
with engine.connect() as con:
  con.execute(
    """
    INSERT INTO Favorite(fk_Score_Anime_rank, fk_Score_Anime_anime_id, fk_Profile_profile_id)
    SELECT ranked, fk_animes_uid, fk_profiles FROM profile_favorites JOIN animes_testing ON fk_animes_uid=animes_testing.uid
    """)

#Removing test tables
with engine.connect() as con:
  con.execute(
    """
    DROP TABLE IF EXISTS anime_genres, animes_testing, profile_favorites, profiles_testing, reviews_testing
    """)