class Api::V1::TodosController < ApplicationController
  before_action :set_todo, only: %i[ show update destroy ]

  # GET /todos
  # GET /todos.json
  def index
    @todos = Todo.order(created_at: :desc)
    render json: @todos
  end

  # GET /todos/1
  # GET /todos/1.json
  def show
    render json: @todo
  end

  # POST /todos
  # POST /todos.json
  def create
    @todo = Todo.new(todo_params)

    if @todo.save
      render json: @todo, status: :created, location: @todo
    else
      render json: @todo.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /todos/1
  # PATCH/PUT /todos/1.json
  def update
    if @todo.update(todo_params)
      render json: @todo, status: :ok
    else
      render json: @todo.errors, status: :unprocessable_entity
    end
  end

  # DELETE /todos/1
  # DELETE /todos/1.json
  def destroy
    @todo.destroy
    head :no_content
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_todo
      @todo = Todo.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def todo_params
      params.require(:todo).permit(:title, :body)
    end
end
