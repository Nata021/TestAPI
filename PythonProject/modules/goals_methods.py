import requests
from faker import Faker
fake = Faker()
my_headers = {"Authorization":"pk_200447320_BF704GUZ6OPFSQ08L2NN2BWLXZEU0IZM"}

def get_goal(goal_id):
    url = f"https://api.clickup.com/api/v2/goal/{goal_id}"
    response = requests.get(url, headers=my_headers)
    return response

def create_goal():
    random_name = fake.first_name()
    body = {
        "name": random_name,
    }
    result = requests.post(
        "https://api.clickup.com/api/v2/team/90151221188/goal",
        headers=my_headers,
        json=body
    )
    return result

def update_goal(goal_id):
    random_name_for_update = fake.first_name()
    body_updated = {
        "name": random_name_for_update,
    }
    result = requests.put(
        f"https://api.clickup.com/api/v2/goal/{goal_id}",
        headers=my_headers,
        json=body_updated
    )
    return result

def delete_goal(goal_id):
    result = requests.delete(
        f"https://api.clickup.com/api/v2/goal/{goal_id}",
        headers=my_headers
    )
    return result

def create_update_delete_goal():
    create_response = create_goal()
    assert create_response.status_code == 200
    goal_id = create_response.json()["goal"]["id"]

    update_response = update_goal(goal_id)
    assert update_response.status_code == 200

    delete_response = delete_goal(goal_id)
    assert delete_response.status_code in [200, 204]

    return {
        "create": create_response,
        "update": update_response,
        "delete": delete_response
    }

def get_create_delete_goal():
    create_response = create_goal()
    assert create_response.status_code == 200
    goal_id = create_response.json()["goal"]["id"]

    get_response = get_goal(goal_id)
    assert get_response.status_code == 200

    delete_response = delete_goal(goal_id)
    assert delete_response.status_code in [200, 204]

    return {
        "create": create_response,
        "get": get_response,
        "delete": delete_response
    }