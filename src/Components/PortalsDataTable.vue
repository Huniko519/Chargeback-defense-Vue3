<template>
  <div>
    <v-toolbar flat color="white">
      <v-toolbar-title>Portals</v-toolbar-title>
      <v-divider
        class="mx-2"
        inset
        vertical
      ></v-divider>
      <v-spacer></v-spacer>
      <v-dialog v-model="editDialog" max-width="900px">
        <template v-slot:activator="{ on }">
          <v-btn color="primary" dark class="mb-2" v-on="on">New Portal</v-btn>
        </template>
        <v-card>
          <v-card-title>
            <span class="headline">{{ formTitle }}</span>
          </v-card-title>

          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs12 sm6 md2>
                  <v-select :items="portalTypes" v-model="editedItem.portaltypeid" label="Portal Type"></v-select>
                </v-flex>
                <v-flex xs12 sm6 md5>
                  <v-text-field v-model="editedItem.portalurl" label="Portal Url"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md5>
                  <v-text-field v-model="editedItem.portaluser" label="Portal User"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md2>
                  <v-select :items="portalOnOffs" v-model="editedItem.portalonoff" label="Portal Onoff"></v-select>
                </v-flex>
                <v-flex xs12 sm6 md5>
                  <v-text-field v-model="editedItem.portalpass" label="Portal Pass"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md5>
                  <v-text-field v-model="editedItem.portalalias" label="Portal Alias"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md2>
                  <v-select :items="portalStatuses" v-model="editedItem.portalstatusid" label="Portal Status"></v-select>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" flat @click="close">Cancel</v-btn>
            <v-btn color="blue darken-1" flat @click="save" :loading="inSubmit" :disabled="inSubmit">
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
          <v-card-title class="headline">Delete Portal</v-card-title>
          <v-card-text>Are you sure you want to delete the portal?</v-card-text>
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
      :items="portalList"
      hide-actions
      class="elevation-1"
      item-key="portalid"
    >
      <template v-slot:items="props">
        <tr @click="props.expanded = !props.expanded" :class="!props.expanded ? 'row-unselected' : 'row-selected'">
          <td width="25%">{{ props.item.portalid }}</td>
          <td width="25%">{{ portalType(props.item.portaltypeid) }}</td>
          <td width="25%">{{ props.item.portalalias }}</td>
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
                <td width="50%">Portal Url</td>
                <td>{{ props.item.portalurl }}</td>
              </tr>
              <tr>
                <td>Portal User</td>
                <td>{{ props.item.portaluser }}</td>
              </tr>
              <tr>
                <td>Portal Onoff</td>
                <td>{{ portalOnOff(props.item.portalonoff) }}</td>
              </tr>
              <tr>
                <td>Portal Pass</td>
                <td>{{ props.item.portalpass }}</td>
              </tr>
              <tr>
                <td>Portal Status</td>
                <td>{{ portalStatus(props.item.portalstatusid) }}</td>
              </tr>
            </tbody>
          </table>
        </v-card>
      </template>
    </v-data-table>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'

  import { getCurDateTime } from "../modules/utils";

  export default {
    props: ["portals"],
    watch: {
      'portals': {
        handler: function () {
          const portals = this.portals.map(portal => {
            let item = {}
            item.portalid = portal.portalid
            
            item.portaltypeid = portal.portaltypeid
            item.portalurl = portal.portalurl
            item.portaluser = portal.portaluser
            
            item.portalonoff = portal.portalonoff
            item.portalpass = portal.portalpass
            item.portalalias = portal.portalalias
            item.portalstatusid = portal.portalstatusid
            item.merchantid = portal.merchantid

            this.merchantId = portal.merchantid

            return item
          })

          this.portalList = [...portals]
        },
        deep: true
      },
      editDialog (val) {
        val || this.close()
      }
    },
    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New Portal' : `Edit Portal ID: ${this.editedItem.portalid}`
      }
    },
    data () {
      return {
        merchantId: '',
        editDialog: false,
        headers: [
          {
            text: 'Portal ID',
            align: 'start',
            sortable: false,
            value: 'portalid',
          },
          {
            text: 'Portal Type',
            align: 'start',
            sortable: false,
            value: 'portaltypeid',
          },
          {
            text: 'Portal Alias',
            align: 'start',
            sortable: false,
            value: 'portalalias',
          },
          {
            text: 'Actions',
            align: 'center',
            sortable: false,
            value: 'portalid',
          }
        ],
        editedIndex: -1,
        editedItem: {
          portalid: '',
          portaltypeid: '1',
          portalurl: '',
          portaluser: '',
          portalonoff: '1',
          portalpass: '',
          portalalias: '',
          portalstatusid: '69',
          portalnotes: '',
          merchantid: this.merchantId
        },
        deletedItem: null,
        deleteDialog: false,
        defaultItem: {
          portalid: '',
          portaltypeid: '1',
          portalurl: '',
          portaluser: '',
          portalonoff: '1',
          portalpass: '',
          portalalias: '',
          portalstatusid: '69',
          portalnotes: '',
          merchantid: this.merchantId
        },
        portalTypes: [
          { text: 'gateway', value: '1' },
          { text: 'processor', value: '2' },
          { text: 'crm', value: '3' },
          { text: 'other', value: '4' }
        ],
        portalOnOffs: [
          { text: 'on', value: '1' },
          { text: 'off', value: '0' }
        ],
        portalStatuses: [
          { text: 'Active', value: '69' },
          { text: 'Incorrect User/Pass', value: '76' },
          { text: 'Security Answers Needed', value: '75' }
        ],
        portalList: [],
        inSubmit: false,
        inDelete: false
      }
    },
    methods: {
      ...mapActions('warpliteapi', ['setCbdMerchantPortals', 'addCbdMerchantPortals']),
      portalType (portalTypeId) {
        let portalType = this.portalTypes.find(ele => ele.value === portalTypeId)
        return portalType.text
      },
      portalOnOff (portalonoff) {
        return portalonoff === '1' ? 'on' : 'off'
      },
      portalStatus (portalStatusId) {
        let portalStatus = this.portalStatuses.find(ele => ele.value === portalStatusId)
        return portalStatus.text
      },
      editItem (item) {
        this.editedIndex = this.portalList.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.editDialog = true
      },
      deleteItem (item) {
        this.deletedItem = { ...item }
        this.deleteDialog = true
      },
      del () {
        this.inDelete = true
        const index = this.portalList.findIndex(ele => ele.portalid === this.deletedItem.portalid)
        let deletedItem = { ...this.deletedItem }
        deletedItem.dateupdated = getCurDateTime()
        deletedItem.portalonoff = '0'
        this.setCbdMerchantPortals(deletedItem)
          .then(() => {
            this.portalList.splice(index, 1)
            this.inDelete = false
            this.deleteDialog = false

            const value = {
              alertStatus: true,
              alertStatusText: 'Portal deleted successfully!',
              alertType: 0
            }
            this.$emit('send-alert', value);
          })
          .catch(() => {
            this.inDelete = false

            const value = {
              alertStatus: true,
              alertStatusText: 'Delete Portal failed!',
              alertType: 1
            }
            this.$emit('send-alert', value);
          })
      },
      close () {
        this.editDialog = false
        setTimeout(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        }, 300)
      },
      save () {
        const {
          portalurl,
          portaluser,
          portalpass,
          portalalias
        } = this.editedItem

        if (portalurl !== '' && portaluser !== '' && portalpass !== '' && portalalias !== '') {
          this.inSubmit = true

          if (this.editedIndex > -1) { // Update the existing portal
            let editedItem = { ...this.editedItem }
            editedItem.dateupdated = getCurDateTime()
            this.setCbdMerchantPortals(editedItem)
              .then(() => {
                Object.assign(this.portalList[this.editedIndex], this.editedItem)
                this.inSubmit = false
                this.close()

                const value = {
                  alertStatus: true,
                  alertStatusText: 'Portal updated successfully!',
                  alertType: 0
                }
                this.$emit('send-alert', value);
              })
              .catch(() => {
                this.inSubmit = false

                const value = {
                  alertStatus: true,
                  alertStatusText: 'Update Portal failed!',
                  alertType: 1
                }
                this.$emit('send-alert', value);
              })
          } else { // Add the new portal
            const editedItem = {
              portaltypeid: this.editedItem.portaltypeid,
              portalurl: this.editedItem.portalurl,
              portaluser: this.editedItem.portaluser,
              portalonoff: this.editedItem.portalonoff,
              portalpass: this.editedItem.portalpass,
              portalalias: this.editedItem.portalalias,
              portalstatusid: this.editedItem.portalstatusid,
              portalnotes: this.editedItem.portalnotes,
              merchantid: this.merchantId
            }

            this.addCbdMerchantPortals(editedItem)
              .then(res => {
                const portalId = res.summary.data[0]
                editedItem.portalid = portalId
                this.portalList.push(editedItem)
                this.inSubmit = false
                this.close()
                const value = {
                  alertStatus: true,
                  alertStatusText: 'Portal added successfully!',
                  alertType: 0
                }
                this.$emit('send-alert', value);
              })
              .catch(() => {
                this.inSubmit = false
                const value = {
                  alertStatus: true,
                  alertStatusText: 'Add Portal failed!',
                  alertType: 1
                }
                this.$emit('send-alert', value);
              })
          }
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
</style>
