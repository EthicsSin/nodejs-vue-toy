<template>
  <div>
    <h1>Vue Postgresql NodeJS</h1>
    <table>
      <thead>
        <th>번호</th>
        <th>아이디</th>
        <th>이름</th>
      </thead>
      <tbody>
        <tr v-for="list in lists" :key="list.user_no">
          <td>
            {{ list.user_no }}
          </td>
          <td>
            {{ list.user_id }}
          </td>
          <td>
            {{ list.user_name }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      text: 'fetching...',
      lists: ''
    }
  },
  mounted: async function () {
    const response = await fetch('api/hello')
    this.text = 'done'
    this.lists = await response.json()
    this.text = this.lists

    // console.log(JSON.stringify(list));
  }
}
</script>

<style scoped lang="scss">
h3 {
  font-size: 15px;
  font-weight: 400;
}
</style>
