<template>
  <div>
    <h1>Vue Postgresql NodeJS</h1>
    <table>
      <thead>
        <th>번호</th>
        <th>성</th>
      </thead>
      <tbody>
        <tr v-for="list in lists" :key="list.toy_seq">
          <td>
            {{ list.toy_seq }}
          </td>
          <td>
            {{ list.toy_name }}
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
      lists: 'aaa'
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
