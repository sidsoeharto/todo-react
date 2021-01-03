import React from 'react';
import { Link } from 'react-router-dom';
import axios from '../axios';
import moment from 'moment'

function NewsCard (props) {
  return (
    <div class="card">
      <div class="card-image">
        <figure class="image is-4by3">
          <img src={props.news.imageUrl} alt="News Image" />
        </figure>
      </div>
      <div class="card-content">
        <div class="media-content">
          <h2 class="title is-4">{props.news.title}</h2>
        </div>
        <br />
        <div class="content">
          <p>{props.news.description}</p>
          <p>{moment(props.news.publishedAt).format('MMMM Do YYYY')}</p><br />
          <a href={props.news.url}>Click to see more of this news</a>
        </div>
      </div>
    </div>
  )
}

export default NewsCard