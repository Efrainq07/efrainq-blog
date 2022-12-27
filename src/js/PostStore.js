import { writable } from "svelte/store";
export const newPostData = writable(JSON.parse(localStorage.getItem("newPostData")) || {
    title: "",
    content: ""
  });

newPostData.subscribe(val => localStorage.setItem("newPostData",  JSON.stringify(val)));