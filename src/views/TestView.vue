<script setup lang="ts">
import { useQuery } from '@vue/apollo-composable'
import { GET_MOVIES } from '@/graphql/queries'

const { result, loading, error } = useQuery(GET_MOVIES)
</script>
<template>
  <div>
    <p v-if="loading">Loading...</p>
    <p v-else-if="error">Error: {{ error.message }}</p>
    <p>{{ JSON.stringify(result) }}</p>
  </div>
</template>
