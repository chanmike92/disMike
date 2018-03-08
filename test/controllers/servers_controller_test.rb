require 'test_helper'

class ServersControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get servers_index_url
    assert_response :success
  end

  test "should get create" do
    get servers_create_url
    assert_response :success
  end

  test "should get show" do
    get servers_show_url
    assert_response :success
  end

  test "should get update" do
    get servers_update_url
    assert_response :success
  end

  test "should get destroy" do
    get servers_destroy_url
    assert_response :success
  end

end
