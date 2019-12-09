class Api::ThingsController < ApplicationController
  def index
    render json: { things: [
      {
        name: 'joe',
        id: '1'
      }
    ] }.to_json
  end
end
