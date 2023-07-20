<script>
import Restaurant from "@/store/modules/types";

export default {
  name: "SharingCafe",
  props: {
    post: {
      type: Restaurant,
      required: true,
    },
  },
  data() {
    return {
      sharing: {
        url: "https://cafe-finder-skave-a.netlify.app/",
        title: "Привет! Посмотри заведение на ",
        description: ` - ${this.post.name}, до него идти ${
          this.post.time
        } мин, ${
          this.post.business_lunch
            ? "и у них есть бизнес-ланч!"
            : "только у них нет бизнес-ланча"
        }`,
      },
      networks: [
        {
          network: "email",
          name: "Email",
          icon: "far fah fa-lg fa-envelope",
          color: "#4f46e5",
        },
        {
          network: "whatsapp",
          name: "Whatsapp",
          icon: "fab fah fa-lg fa-whatsapp",
          color: "#25d366",
        },
      ],
    };
  },
};
</script>

<template>
  <div class="share-network-list">
    <ShareNetwork
      v-for="network in networks"
      :network="network.network"
      :key="network.network"
      :style="{ backgroundColor: network.color }"
      :url="sharing.url"
      :title="sharing.title"
      :description="sharing.description"
      :quote="sharing.quote"
      :hashtags="sharing.hashtags"
      :twitterUser="sharing.twitterUser"
    >
      <i :class="network.icon"></i>
      <span>{{ network.name }}</span>
    </ShareNetwork>
  </div>
</template>

<style>
.share-network-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
  margin-top: auto;
}

a[class^="share-network-"] {
  flex: none;
  color: #ffffff;
  background-color: #333;
  border-radius: 3px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-content: center;
  align-items: center;
  cursor: pointer;
  margin: 0 10px 10px 0;
}

a[class^="share-network-"] .fah {
  background-color: rgba(0, 0, 0, 0.2);
  padding: 10px;
  flex: 0 1 auto;
}

a[class^="share-network-"] span {
  padding: 0 10px;
  flex: 1 1 0%;
  font-weight: 500;
}
</style>
