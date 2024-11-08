<template>
    <tr class="text-center" @click="goToDetail(article.article_no)">
      <th scope="row">{{ article.article_no }}</th>
      <td class="text-start">
        <a href="#" class="article-title link-dark" @click.prevent>{{ article.subject }}</a>
      </td>
      <td>{{ article.user_id }}</td>
      <td>{{ article.views }}</td>
      <td>{{ article.created_at }}</td>
    </tr>
  </template>
  
  <script>
  export default {
    name: "BoardListItem",
    props: {
      article: {
        type: Object,
        required: true
      }
    },
    methods: {
      goToDetail(articleNo) {
        this.$router.push({ name: "BoardDetail", params: { articleNo } });
      }
    }
  };
  </script>
  
  <style scoped>
  /* 필요한 경우 스타일 추가 */
  </style>
  