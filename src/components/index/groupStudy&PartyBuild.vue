<template>
    <div id="panel">
        <div class="areaTitle">
            <div class="left">
                <div class="small">GROUP | PARTY</div>
                <div class="text">团学与党建</div>
            </div>
        </div>
        <div class="card">
            <div class="title areaTitle">
                团学工作
                <div class="more" @click="$router.push('/list/group')">
                    更多内容
                    <ri-arrow-right-s-line class="icon"/>
                </div>
            </div>
            <div class="list">
                <div class="item" v-for="(item,index) in group.titles"
                     @click="$router.push('/article/'+group.ids[index]+'?category=group')">
                    <div class="time">
                        <div class="month">
                            {{ group.dates[index][0] }}
                        </div>
                        /
                        <div class="day">
                            {{ group.dates[index][1] }}
                        </div>
                    </div>
                    <div class="right">
                        <div class="text">
                            {{ item }}
                        </div>
                        <div class="view">
                            查看详情<i class="ri-arrow-right-s-line"></i>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <div class="card">
            <div class="title areaTitle">
                党建动态
                <div class="more" @click="$router.push('/list/party')">
                    更多内容
                    <ri-arrow-right-s-line class="icon"/>
                </div>
            </div>
            <div class="list">
                <div class="item" v-for="(item,index) in party.titles"
                     @click="$router.push('/article/'+party.ids[index]+'?category=party')">
                    <div class="time">
                        <div class="month">
                            {{ party.dates[index][0] }}
                        </div>
                        /
                        <div class="day">
                            {{ party.dates[index][1] }}
                        </div>
                    </div>
                    <div class="right">
                        <div class="text">
                            {{ item }}
                        </div>
                        <div class="view">
                            查看详情<i class="ri-arrow-right-s-line"></i>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ["group", "party"],
    name: "groupStudy&PartyBuild"
}
</script>

<style scoped lang="less">
@import url("../../styles/index/groupStudy&PartyBuild.less");
</style>
