<template>
  <div>
    <v-toolbar flat color="white">
      <v-toolbar-title>Apis</v-toolbar-title>
      <v-divider
        class="mx-2"
        inset
        vertical
      ></v-divider>
      <v-spacer></v-spacer>
      <v-dialog persistent v-model="addDialog" max-width="900px">
        <template v-slot:activator="{ on }">
          <v-btn color="primary" dark class="mb-2" @click="onNew">New API</v-btn>
        </template>
        <v-card>
          <v-alert
            v-model="alertStatus"
            dismissible
            :type="alertType===0 ? 'success' : 'error'"
            transition="scale-transition"
          >
            {{ alertStatusText }}
          </v-alert>
          <v-card-title>
            <span class="headline">{{ formTitle }}</span>
          </v-card-title>

          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs12 sm6 md4>
                  <v-select :items="apiTypes" v-model="editedItem.apitype" @change="onChangeApiType" label="API Type"></v-select>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-select :items="apiConnections" v-model="editedItem.vendorid" @change="onChangeVendorId" label="API Connection"></v-select>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-switch v-model="editedItem.apidefault" label="API Default" color="primary"></v-switch>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.apialias" label="API Alias"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-select :items="apiOnOffs" v-model="editedItem.apionoff" label="API OnOff"></v-select>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-select :items="apiStatuses" v-model="editedItem.statusid" label="API Status"></v-select>
                </v-flex>
                <v-flex xs12 sm6 md6 v-for="fkey in Object.keys(editedItem.apirules)" :key="fkey">
                  <v-text-field v-model="editedItem.apirules[fkey].value" :label="editedItem.apirules[fkey].nickname"></v-text-field>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" flat @click="close">Cancel</v-btn>
            <v-btn color="blue darken-1" flat @click="test" :loading="inTest" :disabled="inTest || (editedItem.vendorid !== '1' && editedItem.vendorid !== '5')">
              Test
              <template v-slot:loader>
                <span class="custom-loader">
                  <v-icon light>cached</v-icon>
                </span>
              </template>
            </v-btn>
            <v-btn color="blue darken-1" flat @click="save" :loading="inSubmit" :disabled="inSubmit || !apiSuccess">
              Save
              <template v-slot:loader>
                <span class="custom-loader">
                  <v-icon light>cached</v-icon>
                </span>
              </template>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-dialog persistent v-model="editDialog" max-width="900px">
        <v-card>
          <v-alert
            v-model="alertStatus"
            dismissible
            :type="alertType===0 ? 'success' : 'error'"
            transition="scale-transition"
          >
            {{ alertStatusText }}
          </v-alert>
          <v-card-title>
            <span class="headline">{{ formTitle }}</span>
          </v-card-title>

          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs12 sm6 md4>
                  <v-select :items="apiTypes" v-model="editedItem.apitype" label="API Type"></v-select>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-switch v-model="editedItem.apidefault" label="API Default" color="primary"></v-switch>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.apialias" label="API Alias"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-select :items="apiOnOffs" v-model="editedItem.apionoff" label="API OnOff"></v-select>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-select :items="apiStatuses" v-model="editedItem.statusid" label="API Status"></v-select>
                </v-flex>
                <v-flex xs12 sm6 md6 v-for="fkey in Object.keys(editedItem.apirules)" :key="fkey">
                  <v-text-field v-model="editedItem.apirules[fkey].value" :label="editedItem.apirules[fkey].nickname"></v-text-field>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" flat @click="close">Cancel</v-btn>
            <v-btn color="blue darken-1" flat @click="test" :loading="inTest" :disabled="inTest || (editedItem.vendorid !== '1' && editedItem.vendorid !== '5')">
              Test
              <template v-slot:loader>
                <span class="custom-loader">
                  <v-icon light>cached</v-icon>
                </span>
              </template>
            </v-btn>
            <v-btn color="blue darken-1" flat @click="save" :loading="inSubmit" :disabled="inSubmit || !apiSuccess">
              Save
              <template v-slot:loader>
                <span class="custom-loader">
                  <v-icon light>cached</v-icon>
                </span>
              </template>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-dialog v-model="deleteDialog" persistent max-width="290">
        <v-card>
          <v-card-title class="headline">Delete API</v-card-title>
          <v-card-text>Are you sure you want to delete the API?</v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="green darken-1" flat @click="deleteDialog = false">No</v-btn>
            <v-btn color="green darken-1" flat @click="del" :loading="inDelete" :disabled="inDelete">Yes</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-toolbar>
    <v-data-table
      :headers="headers"
      :items="apiList"
      hide-actions
      class="elevation-1"
      item-key="apiid"
    >
      <template v-slot:items="props">
        <tr @click="props.expanded = !props.expanded" :class="!props.expanded ? 'row-unselected' : 'row-selected'">
          <td width="25%" class="text-cell">{{ props.item.apiid }}</td>
          <td width="25%" class="text-cell">{{ apiType(props.item.apitype) }}</td>
          <td width="25%" class="text-cell">{{ props.item.apialias }} <span class="iconify color:green" data-icon="mdi:checkbox-multiple-marked-circle" data-inline="true" v-if="props.item.apidefault"><i class="pe-7s-check font-size-sm"></i></span></td>
          <td class="justify-center layout px-0">
            <v-icon
              small
              class="mr-2"
              @click="editItem(props.item)"
            >
              edit
            </v-icon>
            <v-icon
              small
              @click="deleteItem(props.item)"
            >
              delete
            </v-icon>
          </td>
        </tr>
      </template>
      <template v-slot:expand="props">
        <v-card flat>
          <table class="table-striped v-table">
            <tbody>
              <tr>
                <td class="text-cell">API OnOff</td>
                <td class="text-cell">{{ apiOnOff(props.item.apionoff) }}</td>
              </tr>
              <tr>
                <td class="text-cell">API Status</td>
                <td class="text-cell">{{ apiStatus(props.item.statusid) }}</td>
              </tr>
              <tr v-for="fkey in Object.keys(props.item.apirules)" :key="fkey">
                <td class="text-cell">{{ props.item.apirules[fkey].nickname }}</td>
                <td class="text-cell">{{ props.item.apirules[fkey].value }}</td>
              </tr>
            </tbody>
          </table>
        </v-card>
      </template>
    </v-data-table>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'

  export default {
    props: ['apis'],
    watch: {
      'apis': {
        handler: function () {
          const apis = this.apis.map(api => {
            let item = {}
            item.apiid = api.apiid
            item.apitype = api.apitype
            item.vendorid = api.vendorid
            item.connid = api.connid
            item.merchantid = api.merchantid
            item.apionoff = api.apionoff
            item.apidefault = api.apidefault === '1' ? true : false,
            item.statusid = api.statusid
            item.apialias = api.apialias
            item.apimethod = api.apimethod
            item.apirules = JSON.parse(api.apirules)

            return item
          })

          this.apiList = [...apis]
        },
        deep: true
      },
      editDialog (val) {
        val || this.close()
      },
      addDialog (val) {
        val || this.close()
      }
    },
    computed: {
      ...mapGetters({
        'getApiConnections': 'warpliteapi/getApiConnections'
      }),
      formTitle () {
        return this.editedIndex === -1 ? 'New API' : `Edit API ID: ${this.editedItem.apiid}`
      },
      merchantId () {
        if (this.apis[0]) return this.apis[0].merchantid
        return ''
      },
      apiConnections () {
        let filterConnections = this.getApiConnections.filter(ele => ele.conntype === this.editedItem.apitype)
        filterConnections = filterConnections.map(ele => {
          let item = {}
          item.value = ele.vendorid
          item.text = ele.connname

          return item
        })

        return filterConnections
      }
    },
    data () {
      return {
        alertStatus: false,
        alertStatusText: '',
        alertType: 0, // 0: success, 1: error
        apiSuccess: true,
        editDialog: false,
        addDialog: false,
        headers: [
          {
            text: 'API ID',
            align: 'start',
            sortable: false,
            value: 'apiid',
          },
          {
            text: 'API Type',
            align: 'start',
            sortable: false,
            value: 'apitype',
          },
          {
            text: 'API Alias',
            align: 'start',
            sortable: false,
            value: 'apialias',
          },
          {
            text: 'Actions',
            align: 'center',
            sortable: false,
            value: 'apiid',
          }
        ],
        editedIndex: -1,
        editedItem: {
          apiid: '',
          apitype: '1',
          vendorid: '1',
          connid: '1',
          merchantid: this.merchantId,
          apionoff: '1',
          apidefault: true,
          statusid: '255',
          apialias: '',
          apimethod: 'GET',
          apirules: this.apiRule('1', '1')
        },
        deletedItem: null,
        deleteDialog: false,
        defaultItem: {
          apiid: '',
          apitype: '1',
          vendorid: '1',
          connid: '1',
          merchantid: this.merchantId,
          apionoff: '1',
          apidefault: true,
          statusid: '255',
          apialias: '',
          apimethod: 'GET',
          apirules: this.apiRule('1', '1')
        },
        apiTypes: [
          { text: 'gateway', value: '1' },
          { text: 'processor', value: '2' },
          { text: 'crm', value: '3' },
          { text: 'other', value: '4' }
        ],
        apiOnOffs: [
          { text: 'on', value: '1' },
          { text: 'off', value: '0' }
        ],
        apiStatuses: [
          { text: 'API Active Credentials', value: '255' },
          { text: 'API Inactive Credentials', value: '256' }
        ],
        apiList: [],
        inSubmit: false,
        inTest: false,
        inDelete: false
      }
    },
    methods: {
      ...mapActions('warpliteapi', ['setCbdMerchantApis', 'addCbdMerchantApis', 'testCbdMerchantApi']),
      apiRule (apiType, vendorId) {
        if (this.getApiConnections) {
          const conn = this.getApiConnections.find(ele => ele.conntype === apiType && ele.vendorid === vendorId)
          if (conn && conn.connrules !== '') return JSON.parse(conn.connrules)
        }

        return {}
      },
      conn (apiType, vendorId) {
        if (this.getApiConnections) {
          const conn = this.getApiConnections.find(ele => ele.conntype === apiType && ele.vendorid === vendorId)
          if (conn) {
            const { connid, apimethod } = conn
            return { connid, apimethod }
          }
        }

        return { connid: '1', apimethod: 'GET' }
      },
      onNew () {
        this.editedItem.apirules = this.apiRule('1', '1')
        this.addDialog = true
      },
      onChangeApiType () {
        if (this.apiConnections[0])
          this.editedItem.vendorid = this.apiConnections[0].value
        else
          this.editedItem.vendorid = '1'

        this.editedItem.apirules = this.apiRule(this.editedItem.apitype, this.editedItem.vendorid)
      },
      onChangeVendorId () {
        this.editedItem.apirules = this.apiRule(this.editedItem.apitype, this.editedItem.vendorid)
      },
      apiType (apiTypeId) {
        const apiType = this.apiTypes.find(ele => ele.value === apiTypeId)
        return apiType.text
      },
      apiOnOff (apionoff) {
        return apionoff === '1' ? 'on' : 'off'
      },
      apiStatus (apiStatusId) {
        const apiStatus = this.apiStatuses.find(ele => ele.value === apiStatusId)
        return apiStatus.text
      },
      apiConnection (apiConnectionId) {
        const apiConnection = this.apiConnections.find(ele => ele.value === apiConnectionId)
        return apiConnection.text
      },
      apiDefault (apidefault) {
        return apidefault ? '1' : '0'
      },
      editItem (item) {
        this.editedIndex = this.apiList.findIndex(ele => ele.apiid === item.apiid)
        this.editedItem = Object.assign({}, item)
        this.editDialog = true
      },
      deleteItem (item) {
        this.deletedItem = { ...item }
        this.deleteDialog = true
      },
      del () {
        this.inDelete = true
        const index = this.apiList.findIndex(ele => ele.apiid === this.deletedItem.apiid)
        let deletedItem = { ...this.deletedItem }
        deletedItem.apionoff = '0'
        this.setCbdMerchantApis(deletedItem)
          .then(() => {
            this.apiList.splice(index, 1)
            this.inDelete = false
            this.deleteDialog = false

            const value = {
              alertStatus: true,
              alertStatusText: 'API deleted successfully!',
              alertType: 0
            }
            this.$emit('send-alert', value);
          })
          .catch(() => {
            this.inDelete = false

            const value = {
              alertStatus: true,
              alertStatusText: 'Delete API failed!',
              alertType: 1
            }
            this.$emit('send-alert', value);
          })
      },
      close () {
        this.editDialog = false
        this.addDialog = false
        setTimeout(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
          this.alertStatus = false
          this.apiSuccess = true
        }, 300)
      },
      test () {
        this.inTest = true
        
        let body = {
          vendorid: this.editedItem.vendorid
        }

        if (this.editedItem.vendorid === '1') {
          for (const [, node] of Object.entries(this.editedItem.apirules)) {
            if (node.fieldname === 'apiuser') {
              body.apiuser = node.value
            } else if (node.fieldname === 'apipass') {
              body.apipass = node.value
            }
          }
        } else if (this.editedItem.vendorid === '5') {
          for (const [, node] of Object.entries(this.editedItem.apirules)) {
            if (node.fieldname === 'loginId') {
              body.apiuser = node.value
            } else if (node.fieldname === 'password') {
              body.apipass = node.value
            }
          }
        }
        
        this.testCbdMerchantApi(body)
          .then(response => {
            const { data } = response
            this.inTest = false
            if (data[0][1] === 'SUCCESS') {
              this.alertStatus = true
              this.alertStatusText = 'Tested API successfully!'
              this.alertType = 0

              this.apiSuccess = true
            } else {
              this.alertStatus = true
              this.alertStatusText = 'Test API failed!'
              this.alertType = 1

              this.apiSuccess = false
            }
          })
          .catch(() => {
            this.inTest = false

            this.alertStatus = true
            this.alertStatusText = 'Test API failed!'
            this.alertType = 1

            this.apiSuccess = false
          })
      },
      save () {
        this.inSubmit = true

        if (this.editedIndex > -1) { // Update the existing api
          let editedItem = { ...this.editedItem }
          editedItem.apidefault = editedItem.apidefault ? '1' : '0'
          this.setCbdMerchantApis(editedItem)
            .then(() => {
              Object.assign(this.apiList[this.editedIndex], this.editedItem)
              this.inSubmit = false
              this.close()

              const value = {
                alertStatus: true,
                alertStatusText: 'API updated successfully!',
                alertType: 0
              }
              this.$emit('send-alert', value);
            })
            .catch(() => {
              this.inSubmit = false

              const value = {
                alertStatus: true,
                alertStatusText: 'Update API failed!',
                alertType: 1
              }
              this.$emit('send-alert', value);
            })
        } else { // Add the new api
          const { connid, apimethod } = this.conn(this.editedItem.apitype, this.editedItem.vendorid)
          const editedItem = {
            apitype: this.editedItem.apitype,
            vendorid: this.editedItem.vendorid,
            connid,
            merchantid: this.merchantId,
            apionoff: this.editedItem.apionoff,
            apidefault: this.editedItem.apidefault ? '1' : '0',
            statusid: this.editedItem.statusid,
            apialias: this.editedItem.apialias,
            apirules: this.editedItem.apirules,
            apimethod
          }

          this.addCbdMerchantApis(editedItem)
            .then(res => {
              const apiId = res.data.apiid
              this.editedItem.apiid = apiId
              this.editedItem.connid = connid
              this.editedItem.apimethod = apimethod
              this.apiList.push(this.editedItem)
              this.inSubmit = false
              this.close()
              const value = {
                alertStatus: true,
                alertStatusText: 'API added successfully!',
                alertType: 0
              }
              this.$emit('send-alert', value);
            })
            .catch(() => {
              this.inSubmit = false
              const value = {
                alertStatus: true,
                alertStatusText: 'Add API failed!',
                alertType: 1
              }
              this.$emit('send-alert', value);
            })
        }
      }
    }
  }
</script>

<style>
  .v-icon {
    display: inline-flex !important;
  }
  .row {
    margin-left: 0 !important;
    margin-right: 0 !important;
  }
  .row-selected {
    background-color: rgba(0, 0, 0, 0.3);
  }
  .row-unselected {
    background-color: rgba(0, 0, 0, 0.1);
  }
  .text-cell {
    max-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
</style>
