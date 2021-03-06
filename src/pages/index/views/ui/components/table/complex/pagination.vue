<template>
    <div class="pagination flex-row-center">
        <el-dropdown split-button type="primary" @click="handleClick" @command="handleCommand" icon="el-icon-delete">
            <i class="el-icon-delete" /> 删除选中
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="a">转为退休</el-dropdown-item>
                <el-dropdown-item command="b">转为创业</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
        <el-pagination
            background
            layout="total, prev, pager, next"
            :total="total"
            :current-page.sync="p"
            @current-change="handleCurrentChange"
        />
    </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import api from '@/api/mock/person';
import { PAGE } from '@/helper/constant';

const { mapState, mapMutations, mapGetters } = createNamespacedHelpers('complexTable');

export default {
    computed: {
        ...mapState(['total', 'components', 'multipleSelection', 'filters']),
        ...mapGetters(['queryPath', 'multipleSelectionUid']),
        p: {
            get() {
                return +this.filters[PAGE];
            },
            set(val) {
                this.setState({ filters: { [PAGE]: val } });
            },
        },
    },
    methods: {
        ...mapMutations(['setState', 'listRemove', 'listUpdateStatus']),

        // 翻页
        handleCurrentChange() {
            this.$router.push(this.queryPath);
        },

        // 确认批量删除
        handleClick() {
            if (!this.multipleSelectionUid) { return; }

            this.$confirm('确认要删除这些数据吗', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning',
            }).then(() => {
                this.batchRemove();
            }).catch(() => {});
        },

        // 批量删除
        async batchRemove() {
            this.setState({ loading: true });

            // 远程删除
            const res = await api.remove({ id: this.multipleSelectionUid });

            // 本地删除
            res && this.listRemove({ multipleSelection: this.multipleSelection });
            this.$nextTick(() => this.setState({ loading: false }));
        },

        // 更多菜单操作
        handleCommand(command) {
            const self = this;
            const map = {
                a: () => { self.changeStatus('退休'); },
                b: () => { self.changeStatus('创业'); },
            };

            if (!this.multipleSelectionUid) { return; }

            this.$confirm('确认要批量修改这些数据吗', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning',
            }).then(() => {
                map[command]();
            }).catch(() => {});
        },

        // 批量改变状态
        async changeStatus(status) {
            this.setState({ loading: true });

            // 远程改变
            const res = await api.updateStatus({ status });

            // 本地改变
            res && this.listUpdateStatus({ status });

            // 清除选择
            this.components.table.clearSelection();
            this.$nextTick(() => this.setState({ loading: false }));
        },
    },
};
</script>
