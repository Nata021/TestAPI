import requests
from faker import Faker
from pytest_steps import test_steps

from modules.goals_methods import create_goal, update_goal, delete_goal, create_update_delete_goal, get_goal, \
    get_create_delete_goal

fake = Faker()
my_headers = {"Authorization":"pk_200447320_BF704GUZ6OPFSQ08L2NN2BWLXZEU0IZM"}

def test_get_goal():
    create_response = create_goal()
    assert create_response.status_code == 200
    goal_id = create_response.json()["goal"]["id"]

    get_response = get_goal(goal_id)
    assert get_response.status_code == 200

    goal_data = get_response.json()["goal"]
    assert goal_data["id"] == goal_id
    assert "name" in goal_data
    print("test_get_goal passed")

def test_create_goal():
    result = create_goal()
    assert result.status_code == 200


def test_update_goal():
    result = create_goal()
    goal_id = result.json()["goal"]["id"]
    update_goal(goal_id)
    assert result.status_code == 200

def test_delete_goal():
    result = create_goal()
    goal_id = result.json()["goal"]["id"]
    delete_response = delete_goal(goal_id)
    assert delete_response.status_code == 200 or delete_response.status_code == 204

def test_create_update_delete_goal():
    result = create_update_delete_goal()
    print("All steps passed:", result)

def test_get_create_delete_goal():
    responses = get_create_delete_goal()
    assert responses["create"].status_code == 200
    assert responses["get"].status_code == 200
    assert responses["delete"].status_code in [200, 204]

    print("test_get_create_delete_goal passed")