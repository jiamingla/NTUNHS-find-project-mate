# NTUNHS-find-project-mate
## 找畢業專題組員的小專案

## Languages & deploy
- backend: Python 3.10.2 Flask
- frontend: PHP
- 部署去哪裡: 應該是AWS或是Heroku
## Linter
- Python: pep8
- PHP: ??
- JavaScript: ??

## How to use:
`pip3 install pipenv`

## 這是資料庫的schema
\*\*\* = 流水號

Account01 帳號資料表

|欄位名稱|型態|預設|其他|
| :- | :- | :- | :- |
|ID|Bigint(30)|YYYYMMDD\*\*\*\*|PK|
|Account|Varchar(30)|“”|不能為空|
|Password|VARBINARY(256)|“”|不能為空, 須加密|
|Mail|Varchar(30)|“”||
|Name|Varchar(100)|User \*\*\*||
|Delete|Tinyint(1)|0|0未刪除1已刪除|

Group01 組別資料表

|欄位名稱|型態|預設|其他|
| :- | :- | :- | :- |
|ID|Bigint(30)|YYYYMMDD\*\*\*\*|PK|
|Name|Varchar(100)|Group \*\*\*|不能為空|
|TeacherName|Varchar(100)|“”||
|CreatId|Bigint(30)|Account01 ID||
|CreatDateTime|TIMESTAMP|CURRENT\_TIMESTAMP||
|ModifyId|Bigint(30)|Account01 ID||
|ModifyDateTime|TIMESTAMP|CURRENT\_TIMESTAMP ON UPDATE CURRENT\_TIMESTAMP||
|Delete|Tinyint(1)|0|0未刪除1已刪除|


Group02 組員資料表

|欄位名稱|型態|預設|其他|
| :- | :- | :- | :- |
|ID|Bigint(30)|YYYYMMDD\*\*\*\*|PK|
|Aid|Bigint(30)|Account01 ID|不能為空|
|Gid|Bigint(30)|Group01 ID|不能為空|
|isLeader|Tinyint(1)|0|0不是1是|
|CreatId|Bigint(30)|1||
|CreatDateTime|TIMESTAMP|CURRENT\_TIMESTAMP||
|ModifyId|Bigint(30)|Account01 ID||
|ModifyDateTime|TIMESTAMP|CURRENT\_TIMESTAMP ON UPDATE CURRENT\_TIMESTAMP||
|Delete|Tinyint(1)|0|0未刪除1已刪除|

Group03 組別討論資料表

|欄位名稱|型態|預設|其他|
| :- | :- | :- | :- |
|ID|Bigint(30)|YYYYMMDD\*\*\*\*|PK|
|Aid|Bigint(30)|Account01 ID|不能為空|
|Gid|Bigint(30)|Group01 ID|不能為空|
|Memo1|MediumText|“”||
|CreatId|Bigint(30)|Account01 ID||
|CreatDateTime|TIMESTAMP|CURRENT\_TIMESTAMP||
|ModifyId|Bigint(30)|Account01 ID|不能為空, 須加密|
|ModifyDateTime|TIMESTAMP|CURRENT\_TIMESTAMP ON UPDATE CURRENT\_TIMESTAMP||
|Delete|Tinyint(1)|0|0未刪除1已刪除|


MessageBoard01 留言板資料表

|欄位名稱|型態|預設|其他|
| :- | :- | :- | :- |
|ID|Bigint(30)|YYYYMMDD\*\*\*\*|PK|
|Aid|Bigint(30)|Account01 ID|不能為空|
|Memo1|MediumText|“”||
|CreatId|Bigint(30)|Account01 ID||
|CreatDateTime|TIMESTAMP|CURRENT\_TIMESTAMP||
|ModifyId|Bigint(30)|Account01 ID|不能為空, 須加密|
|ModifyDateTime|TIMESTAMP|CURRENT\_TIMESTAMP ON UPDATE CURRENT\_TIMESTAMP||
|Delete|Tinyint(1)|0|0未刪除1已刪除|

