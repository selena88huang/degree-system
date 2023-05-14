<template>
    <div class="hello">
        <h1>歡迎登入</h1>
        <p>請貼上您的學籍成績系統的分數</p>
        <div class="container justify-content-center">
            <div>
                <b-form-textarea id="textarea" v-model="text" placeholder="貼上您的課名與成績..." rows="12"></b-form-textarea>
            </div>
        </div>
    </div>
    <br><br>
    <b-button @click="uploadGrade">確認</b-button>
</template>
  
<script>
export default {
    name: 'GradePage',
    data() {
        return {
            text: "", // 使用者輸入的內容
        };
    },
    methods: {
        async uploadGrade() {
            try {
                // 建立 POST 請求的資料
                const data = {
                    field1: this.text, // 將使用者輸入的內容傳遞給後端
                };

                // 發送 POST 請求到後端的 API 路徑
                const response = await fetch("http://localhost:3000/api/data", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data),
                });

                if (response.ok) {
                    alert("已送出！");
                } else {
                    alert("儲存失敗");
                }
            } catch (error) {
                console.error("資料傳送失敗:", error);
                alert("資料傳送失敗");
            }
        },
    },
};
</script>
  
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
    margin: 40px 0 0;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}
</style>
  