class Api::ThingsController < ApplicationController
  def index
    render json: { things: [
      {
        id: '1',
        name: 'joe',
        description: 'Joe is a Person'
      }
    ] }.to_json
  end
end
