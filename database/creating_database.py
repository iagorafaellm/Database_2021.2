from sqlalchemy import create_engine

#Creating a connection with mysql database 
engine = create_engine("mysql+pymysql://" + 'username' + ":" + 'password' + "@" + 'localhost' + "/" + 'databasename')

#Table "Score_Anime"
with engine.connect() as con:
  con.execute(
    """
    CREATE TABLE Score_Anime (
    ranked INT,
    anime_id INT,
    rating FLOAT,
    members INT,
    popularity INT,
    title VARCHAR(255),
    synopsis MEDIUMTEXT,
    img_url VARCHAR(255),
    link VARCHAR(255),
    start_date VARCHAR(255),
    end_date VARCHAR(255),
    episodes INT,
    PRIMARY KEY(ranked, anime_id)
    ); 
    """)

#Table "Profile"
with engine.connect() as con:
  con.execute(
    """
    CREATE TABLE Profile (
    profile_id VARCHAR(255) PRIMARY KEY,
    gender VARCHAR(255),
    birthday VARCHAR(255),
    profile_url VARCHAR(255)
    );
    """)

#Table "Review"
with engine.connect() as con:
  con.execute(
    """
    CREATE TABLE Review (
    review_id INT PRIMARY KEY,
    fk_Score_Anime_rank INT,
    fk_Score_Anime_anime_id INT,
    fk_Profile_profile_id VARCHAR(255),
    avg_score INT,
    overall_rating VARCHAR(255),
    link VARCHAR(255),
    FOREIGN KEY(fk_Score_Anime_rank, fk_Score_Anime_anime_id) REFERENCES Score_Anime(ranked, anime_id),
    FOREIGN KEY(fk_Profile_profile_id) REFERENCES Profile(profile_id)
    );
    """)

#Table "Genre"
with engine.connect() as con:
  con.execute(
    """
    CREATE TABLE Genre (
    fk_Score_Anime_rank INT,
    fk_Score_Anime_anime_id INT,
    genre VARCHAR(255),
    FOREIGN KEY(fk_Score_Anime_rank, fk_Score_Anime_anime_id) REFERENCES Score_Anime(ranked, anime_id)
    );
    """)

#Table "Favorite"
with engine.connect() as con:
  con.execute(
    """
    CREATE TABLE Favorite (
    fk_Score_Anime_rank INT,
    fk_Score_Anime_anime_id INT,
    fk_Profile_profile_id VARCHAR(255),
    FOREIGN KEY(fk_Score_Anime_rank, fk_Score_Anime_anime_id) REFERENCES Score_Anime(ranked, anime_id),
    FOREIGN KEY(fk_Profile_profile_id) REFERENCES Profile(profile_id)
    );
    """)