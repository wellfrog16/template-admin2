<template>
    <div>
        <slot><span></span></slot>
        <el-pagination
            :background="background"
            :layout="layout"
            :total="total"
            :page-size="ps"
            :current-page.sync="p"
            @current-change="handleCurrentChange"
        />
    </div>
</template>

<script>
import { PAGE, PAGE_SIZE } from '@/helper/constant';
import config from '@/config';

export default {
    data() {
        return {
            ps: config.page[PAGE_SIZE],
            background: true,
            layout: 'total, prev, pager, next',
        };
    },
    computed: {
        total() {
            console.warn('请实现total计算属性');
            return true;
        },

        filters() {
            console.warn('请实现filters计算属性');
            return true;
        },

        p: {
            get() {
                return this.filters[PAGE];
            },
            set(val) {
                this.setState({ filters: { [PAGE]: val } });
            },
        },
    },
    methods: {
        setState() { console.warn('请实现setState方法'); },

        // 翻页时执行
        handleCurrentChange() {
            this.setState({ overdue: true });
        },
    },
};
</script>
