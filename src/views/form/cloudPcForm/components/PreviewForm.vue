<template>
  <div>
    <v-form class="form-wrapper">
      <v-row>
        <v-col cols="12">
          <v-card>
            <v-card-title>CloudPc 상세 페이지</v-card-title>
            <div class="alert">
              <v-alert
                type="info"
                text
                outlined
              >
                <h4>가상 PC 관리</h4>
                <div>이 가상 PC를 제어할 수 있습니다.</div>
              </v-alert>
            </div>
            <div class="form-label">PC 기본 정보</div>
            <v-row class="vpc-info">
              <v-col cols="6">
                <v-text-field
                  label="사용자 아이디"
                  value="cloudPcUser01"
                  readonly
                />
              </v-col>
              <v-col cols="6">
                <v-text-field
                  label="가상 PC 명"
                  value="WD00-0DD-678886"
                  readonly
                />
              </v-col>
              <v-col cols="6">
                <v-text-field
                  label="사용자 명"
                  value="박정민"
                  readonly
                />
              </v-col>
              <v-col cols="6">
                <v-text-field
                  label="사용자 그룹"
                  value="리소스 그룹"
                  readonly
                />
              </v-col>
              <v-col cols="6">
                <v-text-field
                  label="가상 PC 그룹명"
                  value="리소스 그룹 2"
                  readonly
                />
              </v-col>
              <v-col cols="6">
                <v-text-field
                  label="가상 PC Pool 명"
                  value="리소스 그룹[전용]"
                  readonly
                />
              </v-col>
              <v-col cols="6">
                <v-text-field
                  label="PC 생성일시"
                  value="2021-04-07 10:45:00"
                  readonly
                />
              </v-col>
              <v-col cols="6">
                <v-row>
                  <v-col cols="6">
                    <v-text-field
                      label="PC 유형"
                      value="전용 PC"
                      readonly
                    />
                  </v-col>
                  <v-col cols="6">
                    <v-select
                      v-model="form.pc_status"
                      :items="items"
                      item-text="label"
                      item-value="value"
                      label="상태"
                    />
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
            <!-- //* END class="vpc-info" -->
            <v-divider />
            <!-- //* 조작 영역 -->
            <div class="form-label">PC 관리</div>
            <!-- //* -->
            <v-row class="vpc-control">
              <v-col cols="6">
                <v-alert
                  class="vpc-status"
                  color="indigo"
                  outlined
                  text
                  dark
                >
                  <h3>접속 대기</h3>
                </v-alert>
              </v-col>
              <v-col cols="6">
                <v-alert
                  class="vpc-status"
                  color="success"
                  outlined
                  text
                  dark
                >
                  <h3>전원 켜짐</h3>
                </v-alert>
              </v-col>
              <v-col cols="6">
                <v-row>
                  <v-col cols="6">
                    <v-btn
                      block
                      light
                      depressed
                      color="grey lighten-2"
                    >초기화</v-btn>
                  </v-col>
                  <v-col cols="6">
                    <v-btn
                      block
                      light
                      depressed
                      color="grey lighten-2"
                    >원격 접속</v-btn>
                  </v-col>
                </v-row>
              </v-col>
              <v-col cols="6">
                <v-row>
                  <v-col cols="6">
                    <v-btn
                      block
                      light
                      depressed
                      color="grey lighten-2"
                    >전원 종료</v-btn>
                  </v-col>
                  <v-col cols="6">
                    <v-btn
                      block
                      dark
                      depressed
                      color="red darken-1"
                    >강제 시작</v-btn>
                  </v-col>
                </v-row>
              </v-col>
              <v-col cols="6">
                <v-row>
                  <v-col cols="6">
                    <v-btn
                      block
                      light
                      depressed
                      color="grey lighten-2"
                    >백업</v-btn>
                  </v-col>
                  <v-col cols="6">
                    <v-btn
                      block
                      light
                      depressed
                      color="grey lighten-2"
                    >스냅샷</v-btn>
                  </v-col>
                </v-row>
              </v-col>
              <v-col cols="6">
                <v-row>
                  <v-col cols="6">
                    <v-btn
                      block
                      light
                      depressed
                      color="grey lighten-2"
                    >스냅 생성</v-btn>
                  </v-col>
                  <v-col cols="6">
                    <v-btn
                      block
                      light
                      depressed
                      color="grey lighten-2"
                    >VNC 접속</v-btn>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
            <v-divider />
            <!-- //* 가상 PC 사용기간 -->
            <div class="form-label">가상 PC 사용기간</div>
            <v-row class="vpc-usage-range">
              <v-col cols="12">
                <date-picker
                  v-model="form.vpc_range"
                  class="custom-date-picker"
                  type="date"
                  range
                  format="YYYY-MM-DD"
                  :editable="false"
                  :clearable="false"
                  value-type="format"
                  placeholder="날짜를 입력 해주세요."
                />
              </v-col>
            </v-row>
            <!-- //* END -->
            <v-divider />
            <v-row class="vpc-info">
              <v-col cols="12">
                <v-text-field
                  label="가상 PC 정책"
                  value="가상 PC 정책 11-20200805095351"
                  readonly
                >
                  <template v-slot:append-outer>
                    <v-btn
                      small
                      color="grey lighten-2"
                    >
                      <v-icon right>
                        mdi-magnify
                      </v-icon>
                      변경
                    </v-btn>
                  </template>
                </v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="백업/스냅샷 정책"
                  value="TEST_TENANT BACKUP SNAPSHOT 기본 정책"
                  readonly
                >
                  <template v-slot:append-outer>
                    <v-btn
                      small
                      color="grey lighten-2"
                    >
                      <v-icon right>
                        mdi-magnify
                      </v-icon>
                      변경
                    </v-btn>
                  </template>
                </v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field
                  label="템플릿 명"
                  value="가상 PC 정책 템플릿"
                  readonly
                />
              </v-col>
              <v-col cols="6">
                <v-text-field
                  label="골든 이미지명"
                  value="win10-bak-raw"
                  readonly
                />
              </v-col>
              <v-col cols="4">
                <v-text-field
                  label="CPU"
                  value="4"
                  readonly
                />
              </v-col>
              <v-col cols="4">
                <v-text-field
                  label="메모리(MB)"
                  value="8192"
                  readonly
                />
              </v-col>
              <v-col cols="4">
                <v-text-field
                  label="디스크(GB)"
                  value="60"
                  readonly
                />
              </v-col>
            </v-row>
            <v-divider />
            <v-card-actions class="justify-center">
              <v-btn color="primary">
                <span>저장</span>
              </v-btn>
              <v-btn
                color="gray"
                @click="$emit('close', true)"
              >
                <span>닫기</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-form>
  </div>
</template>

<script>
import DatePicker from 'vue2-datepicker'
import 'vue2-datepicker/index.css'

export default {
  name: 'PreviewForm',
  components: {
    DatePicker
  },
  data: () => ({
    form: {
      vpc_range: ['2021-04-06', '2021-04-21'],
      pc_status: 'assign'
    },
    items: [
      {
        label: '선택',
        value: 'none'
      },
      {
        label: '할당',
        value: 'assign'
      },
      {
        label: '정지',
        value: 'stop'
      },
      {
        label: '만료',
        value: 'fail'
      }
    ]
  })
}
</script>

<style lang="scss" scoped>
.v-card {
  .form-label {
    margin: 20px 0px 0px 12px;
    font-weight: 500;
  }
  .v-card__title {
    border-bottom: 1px solid #ddd;
  }
  .alert {
    margin: 15px 18px;
  }
  .vpc-info {
    margin: 10px;
  }
  .vpc-control {
    margin: 12px;
    .vpc-status {
      margin-bottom: 0;
      text-align: center;
    }
  }
  .vpc-usage-range {
    margin: 5px 0px 12px 0px;
    .custom-date-picker {
      width: 100%;
    }
  }
}
</style>

<style scoped>
.custom-date-picker >>> .mx-input-wrapper {
  width: 100% !important;
}
</style>
