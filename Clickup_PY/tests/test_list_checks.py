import requests
from faker import Faker
pip install -r requirements.txt

fake = Faker()

my_headers = {
    "Authorization": "Bearer <your_token_here>",
    "Content-Type": "application/json"
}

def test_get_list():
    result = requests.get(
        url="https://api.clickup.com/api/v2/folder/90157506273/list",
        headers=my_headers
    )
    assert result.status_code == 200
    print("Test 1 passed")
    # assert result.json()["lists"][0]["name"] == "Project 1"
    # print("Test 2 passed")

def test_create_list():
    body = {
        "name": fake.first_name()
    }

    result = requests.post(
        url="https://api.clickup.com/api/v2/folder/90157506273/list",
        headers=my_headers,
        json=body
    )
    assert result.status_code == 200
    assert result.json()["name"] == body.get("name")