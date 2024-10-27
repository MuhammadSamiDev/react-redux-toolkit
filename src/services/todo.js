import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const todoApi = createApi({
  reducerPath: "todo",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/" }),
  tagTypes: ["Todo"],
  endpoints: (builder) => ({
    getTodoList: builder.query({
      query: () => "todo",
      providesTags: ["Todo"],
    }),
    getTodoById: builder.query({
      query: (id) => `todo/${id}`,
    }),
    addTodo: builder.mutation({
      query: (data) => ({
        url: "todo",
        body: data,
        method: "POST",
      }),
      invalidatesTags: ["Todo"],
    }),
    deleteTodo: builder.mutation({
      query: (id) => ({
        url: `todo/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Todo"],
    }),
    editTodo: builder.mutation({
      query: ({id, data}) => ({
        url: `todo/${id}`,
        body: data,
        method: "PUT",
      }),
      invalidatesTags: ["Todo"],
    }),
  }),
});

export const {
  useAddTodoMutation,
  useDeleteTodoMutation,
  useEditTodoMutation,
  useGetTodoByIdQuery,
  useGetTodoListQuery,
} = todoApi;
