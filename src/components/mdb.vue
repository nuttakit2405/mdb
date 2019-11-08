<template>
<section>
  <div class="">
      <div style="background-color:#363636;height:auto;padding-top:10px">
        <div class="">
            <div class="level" style="">
                <!-- Power TR Status -->
                <div class="column is-4 hero">
                    <div class="box" style="margin-top:-10px;">
                        <p class="title is-6 level-left" style="color:white">Power Transformer Status</p>
                        <div class="level-item" style="margin-left:-5%;margin-right:-5%;">
                            <button class="button is-danger is-small"></button>
                            <p class="title is-7" style="color:white;margin-right:1.5%;margin-left:1.5%;">Unbalance</p>
                            <button class="button is-danger is-small"></button>
                            <p class="title is-7" style="color:white;margin-right:1.5%;margin-left:1.5%;">TR High Temp</p>
                            <button class="button is-success is-small"></button>
                            <p class="title is-7" style="color:white;margin-left:1.5%;">TR High Temp Trip</p>
                        </div>
                    </div>
                    <div class="level" style="margin-top:-10px">
                        <div class="level-left" style="">
                            <a href="#" class="level-left" style="">
                                <img src="https://uppic.cc/d/5o4A" width="100px" />
                            </a>
                        </div>
                        <div class="">
                            <p style="color:white;">1250kVA</p>
                            <p class="level-left" style="color:white;">bill 123,456฿</p>
                        </div>
                        
                        <div class="level-right">
                            <span class="title is-7" style="color:white;">
                                <p style="margin-left:0px;margin-bottom:3%;">%Load</p>
                                <b-progress type="is-danger" :value="load" size="is-small" show-value>{{load}}%</b-progress>
                                <p>Amp. 1140.0 Amp.</p>
                            </span>
                        </div>
                    </div>
                    <nav style="border-top:1px solid rgb(221, 212, 212);margin-top:-2.5%;"></nav>
                    <!-- row1 -->
                    <div class="level" style="padding-top:10px;">
                        <div class="level-left" style="width:25%;">
                            <button class="button is-success is-small"></button>
                            <p style="font-size:13px;color:white;margin-right:5px;margin-left:5px;">Vr-s</p>
                            <p style="font-size:13px;color:yellow;">380.0</p>
                        </div>
                        <div class="level-item" style="width:25%;">
                            <p style="font-size:13px;color:white;margin-right:5px;">Vs-t</p>
                            <p style="font-size:13px;color:yellow;">380.0</p>
                        </div>
                        <div class="level-item" style="width:25%;">
                            <p style="font-size:13px;color:white;margin-right:5px;">Vt-r</p>
                            <p style="font-size:13px;color:yellow;">380.0</p>
                        </div>
                       
                        <div class="level-right" style="width:25%;">
                            <p style="font-size:13px;color:white;margin-right:5px;">Volt</p>
                            <a href="#">
                                <img src="https://uppic.cc/d/5p6E"/>
                            </a>
                        </div>
                    </div>
                    <!-- row2 -->
                    <div class="level" style="margin-top:-5%;">
                        <div class="level-left" style="width:25%;">
                            <button class="button is-success is-small"></button>
                            <p style="font-size:13px;color:white;margin-right:5px;margin-left:5px;">Ir</p>
                            <p style="font-size:13px;color:yellow;">380.0</p>
                        </div>
                        <div class="level-item" style="width:25%;">
                            <p style="font-size:13px;color:white;margin-right:5px;">Is</p>
                            <p style="font-size:13px;color:yellow;">380.0</p>
                        </div>
                        <div class="level-item" style="width:25%;">
                            <p style="font-size:13px;color:white;margin-right:5px;">It</p>
                            <p style="font-size:13px;color:yellow;">380.0</p>
                        </div>
                        
                        <div class="level-right" style="width:25%;">
                            <p style="font-size:13px;color:white;margin-right:5px;">Amp.</p>
                            <a href="#">
                                <img src="https://uppic.cc/d/5p6E"/>
                            </a>
                        </div>
                    </div>
                    <!-- row3 -->
                    <div class="level" style="margin-top:-5%;">
                        <div class="level-left">
                            <button class="button is-success is-small"></button>
                            <p style="font-size:13px;color:white;margin-right:5px;margin-left:5px;">%Unbalance Voltage</p>
                            <p style="font-size:13px;color:yellow;margin-right:5px;">2.2</p>
                            <a href="#">
                                <img src="https://uppic.cc/d/5p6E"/>
                            </a>
                        </div>
                        <div class="level-left">
                            <button class="button is-success is-small"></button>
                            <p style="font-size:13px;color:white;margin-right:5px;margin-left:5px;">%Unbalance Current</p>
                            <p style="font-size:13px;color:yellow;margin-right:5px;">2.2</p>
                            <a href="#">
                                <img src="https://uppic.cc/d/5p6E"/>
                            </a>
                        </div>
                    </div>
                    <!-- row4 -->
                    <div class="level" style="margin-top:-5%;">
                        <div class="level-left" style="width:50%;">
                            <button class="button is-success is-small"></button>
                            <p style="font-size:13px;color:white;margin-right:5px;margin-left:5px;">%Load</p>
                        </div>
                        <div class="" style="width:25%;">
                            <p style="font-size:13px;color:yellow;margin-right:5px;">{{load}}</p>
                        </div>
                        
                        <div class="level-right" style="width:25%;">
                            <p style="font-size:13px;color:white;margin-right:5px;margin-left:5px;">Percent.</p>
                            <a href="#">
                                <img src="https://uppic.cc/d/5p6E"/>
                            </a>
                        </div>
                    </div>
                    <!-- row5 -->
                    <div class="level" style="margin-top:-5%;">
                        <div class="level-left" style="width:50%;">
                            <button class="button is-danger is-small"></button>
                            <p style="font-size:13px;color:white;margin-right:5px;margin-left:5px;">Apparent Power</p>
                        </div>
                        <div class="" style="width:25%;">
                            <p style="font-size:13px;color:yellow;margin-right:5px;">124.3</p>
                        </div>
                        <div class="level-right" style="width:25%;">
                            <p style="font-size:13px;color:white;margin-right:5px;margin-left:5px;">kVa.</p>
                            <a href="#">
                                <img src="https://uppic.cc/d/5p6E"/>
                            </a>
                        </div>
                    </div>
                    <!-- row6 -->
                    <div class="level" style="margin-top:-5%;">
                        <div class="level-left" style="width:50%;">
                            <button class="button is-success is-small"></button>
                            <p style="font-size:13px;color:white;margin-right:5px;margin-left:5px;">Power Factor</p>
                        </div>
                        <div class="" style="width:25%;">
                            <p style="font-size:13px;color:yellow;margin-right:5px;">7.2</p>
                        </div>
                        <div class="level-right" style="width:25%;">
                            <p style="font-size:13px;color:white;margin-right:10px;margin-left:5px;">-</p>
                            <a href="#">
                                <img src="https://uppic.cc/d/5p6E"/>
                            </a>
                        </div>
                    </div>
                    <!-- row7 -->
                    <div class="level" style="margin-top:-5%;">
                        <div class="level-left" style="width:50%;">
                            <button class="button is-success is-small"></button>
                            <p style="font-size:13px;color:white;margin-right:5px;margin-left:5px;">Neutron Current</p>
                        </div>
                        <div class="" style="width:25%;">
                            <p style="font-size:13px;color:yellow;margin-right:5px;">3</p>
                        </div>
                        <div class="level-right" style="width:25%;">
                            <p style="font-size:13px;color:white;margin-right:10px;margin-left:5px;">A</p>
                            <a href="#">
                                <img src="https://uppic.cc/d/5p6E"/>
                            </a>
                        </div>
                    </div>
                    <!-- row8 -->
                    <div class="level" style="margin-top:-5%;">
                        <div class="level-left" style="width:50%;">
                            <button class="button is-success is-small"></button>
                            <p style="font-size:13px;color:white;margin-right:5px;margin-left:5px;">Peak Demand</p>
                        </div>
                        <div class="" style="width:25%;">
                            <p style="font-size:13px;color:yellow;margin-right:5px;">450</p>
                        </div>
                        <div class="level-right" style="width:25%;">
                            <p style="font-size:13px;color:white;margin-right:10px;margin-left:5px;">kW</p>
                            <a href="#">
                                <img src="https://uppic.cc/d/5p6E"/>
                            </a>
                        </div>
                    </div>
                    <!-- row9 -->
                    <div class="level" style="margin-top:-5%;">
                        <div class="level-left" style="width:50%;">
                            <button class="button is-success is-small"></button>
                            <p style="font-size:13px;color:white;margin-right:5px;margin-left:5px;">Ambient Temperature</p>
                        </div>
                        <div class="" style="width:25%;">
                            <p style="font-size:13px;color:yellow;margin-right:5px;">32</p>
                        </div>
                        <div class="level-right" style="width:25%;">
                            <p style="font-size:13px;color:white;margin-right:10px;margin-left:5px;">C</p>
                            <a href="#">
                                <img src="https://uppic.cc/d/5p6E"/>
                            </a>
                        </div>
                    </div>
                    <!-- row10 -->
                    <div class="level" style="margin-top:-5%;">
                        <div class="level-left" style="width:50%;">
                            <button class="button is-success is-small"></button>
                            <p style="font-size:13px;color:white;margin-right:5px;margin-left:5px;">Top Oil Temperature</p>
                        </div>
                        <div class="" style="width:25%;">
                            <p style="font-size:13px;color:yellow;margin-right:5px;">78</p>
                        </div>
                        <div class="level-right" style="width:25%;">
                            <p style="font-size:13px;color:white;margin-right:10px;margin-left:5px;">C</p>
                            <a href="#">
                                <img src="https://uppic.cc/d/5p6E"/>
                            </a>
                        </div>
                    </div>
                </div>

                <!-- MDB Status -->
                <div class="column is-4 hero">
                    <div class="box" style="margin-top:-10px;">
                        <p class="title is-6 level-left" style="color:white">MDB Status</p>
                        <div class="level-item" style="margin-left:-5%;margin-right:-5%">
                            <button class="button is-danger is-small"></button>
                            <p class="title is-7" style="color:white;margin-right:1%;margin-left:1%;">ACB ON</p>
                            <button class="button is-success is-small"></button>
                            <p class="title is-7" style="color:white;margin-right:1%;margin-left:1%;">ACB OFF</p>
                            <button class="button is-success is-small"></button>
                            <p class="title is-7" style="color:white;margin-left:1%;margin-right:1%;">ACB OV Trip</p>
                            <button class="button is-success is-small"></button>
                            <p class="title is-7" style="color:white;margin-left:1%;">ACB UV Trip</p>
                        </div>
                    </div>
                    <div class="level" style="margin-top:-10px">
                        <div class="level-left" style="">
                            <div class="level-left">
                                <a href="#" style="">
                                    <img src="https://uppic.cc/d/5pSV" width="100px" />
                                </a>
                            </div>
                            
                            
                        </div> 
                        <button class="button is-danger is-medium" style="margin-left:10%;"></button>
                        <div class="level" style="font-size:13px;">
                            <span>
                                <p style="color:white;margin-right:5px;">Apearance Power 850.12 kWA</p>
                                <p style="color:white;margin-right:5px;">Active Power 543 kW</p>
                            </span>
                        </div>
                    </div>
                    <nav style="border-top:1px solid rgb(221, 212, 212);margin-top:-2.5%;"></nav>
                    <!-- row1 -->
                    <div class="level" style="padding-top:10px;">
                        <div class="level-left" style="width:25%;">
                            <button class="button is-success is-small"></button>
                            <p style="font-size:13px;color:white;margin-right:5px;margin-left:5px;">Vr-s</p>
                            <p style="font-size:13px;color:yellow;">380.0</p>
                        </div>
                        <div class="level-item" style="width:25%;">
                            <p style="font-size:13px;color:white;margin-right:5px;">Vs-t</p>
                            <p style="font-size:13px;color:yellow;">380.0</p>
                        </div>
                        <div class="level-item" style="width:25%;">
                            <p style="font-size:13px;color:white;margin-right:5px;">Vt-r</p>
                            <p style="font-size:13px;color:yellow;">380.0</p>
                        </div>
                       
                        <div class="level-right" style="width:25%;">
                            <p style="font-size:13px;color:white;margin-right:5px;">Volt</p>
                            <a href="#">
                                <img src="https://uppic.cc/d/5p6E"/>
                            </a>
                        </div>
                    </div>
                    <!-- row2 -->
                    <div class="level" style="margin-top:-5%;">
                        <div class="level-left" style="width:25%;">
                            <button class="button is-success is-small"></button>
                            <p style="font-size:13px;color:white;margin-right:5px;margin-left:5px;">Ir</p>
                            <p style="font-size:13px;color:yellow;">380.0</p>
                        </div>
                        <div class="level-item" style="width:25%;">
                            <p style="font-size:13px;color:white;margin-right:5px;">Is</p>
                            <p style="font-size:13px;color:yellow;">380.0</p>
                        </div>
                        <div class="level-item" style="width:25%;">
                            <p style="font-size:13px;color:white;margin-right:5px;">It</p>
                            <p style="font-size:13px;color:yellow;">380.0</p>
                        </div>
                        
                        <div class="level-right" style="width:25%;">
                            <p style="font-size:13px;color:white;margin-right:5px;">Amp.</p>
                            <a href="#">
                                <img src="https://uppic.cc/d/5p6E"/>
                            </a>
                        </div>
                    </div>
                    <!-- row3 -->
                    <div class="level" style="margin-top:-5%;">
                        <div class="level-left" style="width:50%;">
                            <button class="button is-success is-small"></button>
                            <p style="font-size:13px;color:white;margin-right:5px;margin-left:5px;">Active Power</p>
                        </div>
                        <div class="" style="width:25%;">
                            <p style="font-size:13px;color:yellow;margin-right:5px;">54.3</p>
                        </div>
                        <div class="level-right" style="width:25%;">
                            <p style="font-size:13px;color:white;margin-right:10px;margin-left:5px;">kW</p>
                            <a href="#">
                                <img src="https://uppic.cc/d/5p6E"/>
                            </a>
                        </div>
                    </div>
                    <!-- row4 -->
                    <div class="level" style="margin-top:-5%;">
                        <div class="level-left" style="width:50%;">
                            <button class="button is-success is-small"></button>
                            <p style="font-size:13px;color:white;margin-right:5px;margin-left:5px;">Apparent Power</p>
                        </div>
                        <div class="" style="width:25%;">
                            <p style="font-size:13px;color:yellow;margin-right:5px;">124.3</p>
                        </div>
                        <div class="level-right" style="width:25%;">
                            <p style="font-size:13px;color:white;margin-right:10px;margin-left:5px;">kVA</p>
                            <a href="#">
                                <img src="https://uppic.cc/d/5p6E"/>
                            </a>
                        </div>
                    </div>
                    <!-- row5 -->
                    <div class="level" style="margin-top:-5%;">
                        <div class="level-left" style="width:50%;">
                            <button class="button is-success is-small"></button>
                            <p style="font-size:13px;color:white;margin-right:5px;margin-left:5px;">Door Switch</p>
                        </div>
                        <div class="" style="width:25%;">
                            <p style="font-size:13px;color:yellow;margin-right:5px;">OFF</p>
                        </div>
                        <div class="level-right" style="width:25%;">
                            <p style="font-size:13px;color:white;margin-right:10px;margin-left:5px;"></p>
                            <a href="#">
                                <img src="https://uppic.cc/d/5p6E"/>
                            </a>
                        </div>
                    </div>
                    <!-- row6 -->
                    <div class="level" style="margin-top:-5%;">
                        <div class="level-left" style="width:50%;">
                            <button class="button is-success is-small"></button>
                            <p style="font-size:13px;color:white;margin-right:5px;margin-left:5px;">Heat Detector</p>
                        </div>
                        <div class="" style="width:25%;">
                            <p style="font-size:13px;color:yellow;margin-right:5px;">Normal</p>
                        </div>
                        <div class="level-right" style="width:25%;">
                            <p style="font-size:13px;color:white;margin-right:10px;margin-left:5px;"></p>
                            <a href="#">
                                <img src="https://uppic.cc/d/5p6E"/>
                            </a>
                        </div>
                    </div>
                    <!-- row7 -->
                    <div class="level" style="margin-top:-5%;">
                        <div class="level-left" style="width:50%;">
                            <button class="button is-danger is-small"></button>
                            <p style="font-size:13px;color:white;margin-right:5px;margin-left:5px;">Smoke Detector</p>
                        </div>
                        <div class="" style="width:25%;">
                            <p style="font-size:13px;color:yellow;margin-right:5px;">Alarm</p>
                        </div>
                        <div class="level-right" style="width:25%;">
                            <p style="font-size:13px;color:white;margin-right:10px;margin-left:5px;"></p>
                            <a href="#">
                                <img src="https://uppic.cc/d/5p6E"/>
                            </a>
                        </div>
                    </div>
                    <!-- row8 -->
                    <div class="level" style="margin-top:-5%;">
                        <div class="level-left" style="width:50%;">
                            <button class="button is-success is-small"></button>
                            <p style="font-size:13px;color:white;margin-right:5px;margin-left:5px;">Electricity Bill Today</p>
                        </div>
                        <div class="" style="width:25%;">
                            <p style="font-size:13px;color:yellow;margin-right:5px;">3456</p>
                        </div>
                        <div class="level-right" style="width:25%;">
                            <p style="font-size:13px;color:white;margin-right:10px;margin-left:5px;">Bath</p>
                            <a href="#">
                                <img src="https://uppic.cc/d/5p6E"/>
                            </a>
                        </div>
                    </div>
                    <!-- row9 -->
                    <div class="level" style="margin-top:-5%;">
                        <div class="level-left" style="width:50%;">
                            <button class="button is-success is-small"></button>
                            <p style="font-size:13px;color:white;margin-right:5px;margin-left:5px;">Electricity Bill This Month</p>
                        </div>
                        <div class="" style="width:25%;">
                            <p style="font-size:13px;color:yellow;margin-right:5px;">54321</p>
                        </div>
                        <div class="level-right" style="width:25%;">
                            <p style="font-size:13px;color:white;margin-right:10px;margin-left:5px;">Bath</p>
                            <a href="#">
                                <img src="https://uppic.cc/d/5p6E"/>
                            </a>
                        </div>
                    </div>
                    <!-- row10 -->
                    <div class="level" style="margin-top:-5%;">
                        <div class="level-left" style="width:50%;">
                            <button class="button is-success is-small"></button>
                            <p style="font-size:13px;color:white;margin-right:5px;margin-left:5px;">Generator Status</p>
                        </div>
                        <div class="" style="width:25%;">
                            <p style="font-size:13px;color:yellow;margin-right:5px;">ON</p>
                        </div>
                        <div class="level-right" style="width:25%;">
                            <p style="font-size:13px;color:white;margin-right:10px;margin-left:5px;"></p>
                        </div>
                    </div>
                </div>

                <!-- Feeders Status -->
                <div class="column is-4 hero">
                    <div class="box" style="margin-top:-10px;">
                        <p class="title is-6 level-left" style="color:white">Feeders Status</p>
                    </div>
                    <!-- F row1 -->
                    <div class="level">
                        <div class="column is-6">
                            <div class="level-left">
                                <p style="font-size:13px;color:white;margin-right:10px;">F1</p>
                                <button class="button is-success"></button>
                                <span style="font-size:13px;color:white;margin-left:10px;">
                                <p class="level-left">Xxx Bath, xxx kWH</p>
                                <p class="level-left">Xxx C, xxx A(Leaked)</p>
                                </span>
                            </div>
                        </div>
                        <div class="column is-6">
                            <div class="level-left">
                                <p style="font-size:13px;color:white;margin-right:10px;">F6</p>
                                <button class="button is-success"></button>
                                <span style="font-size:13px;color:white;margin-left:10px;">
                                <p class="level-left">Xxx Bath, xxx kWH</p>
                                <p class="level-left">Xxx C, xxx A(Leaked)</p>
                                </span>
                            </div>
                        </div>
                    </div>
                    <!-- F row2 -->
                    <div class="level">
                        <div class="column is-6">
                            <div class="level-left">
                                <p style="font-size:13px;color:white;margin-right:10px;">F2</p>
                                <button class="button is-success"></button>
                                <span style="font-size:13px;color:white;margin-left:10px;">
                                <p class="level-left">Xxx Bath, xxx kWH</p>
                                <p class="level-left">Xxx C, xxx A(Leaked)</p>
                                </span>
                            </div>
                        </div>
                        <div class="column is-6">
                            <div class="level-left">
                                <p style="font-size:13px;color:white;margin-right:10px;">F7</p>
                                <button class="button is-danger"></button>
                                <span style="font-size:13px;color:white;margin-left:10px;">
                                <p class="level-left">Xxx Bath, xxx kWH</p>
                                <p class="level-left">Xxx C, xxx A(Leaked)</p>
                                </span>
                            </div>
                        </div>
                    </div>
                    <!-- F row3 -->
                    <div class="level">
                        <div class="column is-6">
                            <div class="level-left">
                                <p style="font-size:13px;color:white;margin-right:10px;">F3</p>
                                <button class="button is-success"></button>
                                <span style="font-size:13px;color:white;margin-left:10px;">
                                <p class="level-left">Xxx Bath, xxx kWH</p>
                                <p class="level-left">Xxx C, xxx A(Leaked)</p>
                                </span>
                            </div>
                        </div>
                        <div class="column is-6">
                            <div class="level-left">
                                <p style="font-size:13px;color:white;margin-right:10px;">F8</p>
                                <button class="button is-success"></button>
                                <span style="font-size:13px;color:white;margin-left:10px;">
                                <p class="level-left">Xxx Bath, xxx kWH</p>
                                <p class="level-left">Xxx C, xxx A(Leaked)</p>
                                </span>
                            </div>
                        </div>
                    </div>
                    <!-- F row4 -->
                    <div class="level">
                        <div class="column is-6">
                            <div class="level-left">
                                <p style="font-size:13px;color:white;margin-right:10px;">F4</p>
                                <button class="button is-danger"></button>
                                <span style="font-size:13px;color:white;margin-left:10px;">
                                <p class="level-left">Xxx Bath, xxx kWH</p>
                                <p class="level-left">Xxx C, xxx A(Leaked)</p>
                                </span>
                            </div>
                        </div>
                        <div class="column is-6">
                            <div class="level-left">
                                <p style="font-size:13px;color:white;margin-right:10px;">F9</p>
                                <button class="button is-success"></button>
                                <span style="font-size:13px;color:white;margin-left:10px;">
                                <p class="level-left">Xxx Bath, xxx kWH</p>
                                <p class="level-left">Xxx C, xxx A(Leaked)</p>
                                </span>
                            </div>
                        </div>
                    </div>
                    <!-- F row5 -->
                    <div class="level">
                        <div class="column is-6">
                            <div class="level-left">
                                <p style="font-size:13px;color:white;margin-right:10px;">F5</p>
                                <button class="button is-success"></button>
                                <span style="font-size:13px;color:white;margin-left:10px;">
                                <p class="level-left">Xxx Bath, xxx kWH</p>
                                <p class="level-left">Xxx C, xxx A(Leaked)</p>
                                </span>
                            </div>
                        </div>
                        <div class="column is-6">
                            <div class="level-left">
                                <p style="font-size:13px;color:white;margin-right:5px;">F10</p>
                                <button class="button is-danger"></button>
                                <span style="font-size:13px;color:white;margin-left:10px;">
                                <p class="level-left">Xxx Bath, xxx kWH</p>
                                <p class="level-left">Xxx C, xxx A(Leaked)</p>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="column" style="margin-top:-2.5%;">
                <nav class="mybox" style="">
                    <div class="level">
                        <div class="level-left">
                            <p class="column" style="color:white;margin-left:10px;">ATS Status</p>
                        </div>
                        <div class="level-right">
                            <p style="color:yellow;margin-right:5px;">Last Update: 25 Mar 2019 20.21</p>
                        </div>
                    </div>
                </nav>
            </div>
            <div class="level-left">
                <div class="column is-4 ">
                    <div class="box">
                        <div class="level">
                            <div class="level-left">
                                <p style="color:white;">ELETRICAL LOAD PROFILE</p>
                            </div>
                        </div>
                        <div class="level" style="margin-top:-5%;">
                            <p class="level-left" style="color:white;">Real-time Chart on Today</p>
                            <p class="level-left" style="color:white;">Electricity bill on Today</p>
                        </div>
                        <div class="level" style="margin-top:-5%;">
                            <p class="level-left" style="color:yellow">Peak Load 500 kW</p>
                            <p class="level-left" style="color:yellow;">498 kWH 12889 Bath</p>
                        </div>
                    </div>
                </div>
                <div class="column is-4">
                    <!-- <plotly :data="datas" :layout="layout" :displayModeBar="false"/> -->
                </div>
            </div>

            <div class="">
                <div class="column is-6">
                    <GChart
                    type="ColumnChart"
                    :data="chartData"
                    :options="chartOptions"
                    :resizeDebounce="150"
                    />
                </div>
            </div>
        </div>
      </div>
  </div>
</section>
</template>

<script>
import Chart from 'chart.js'
import { GChart } from 'vue-google-charts'
import ApexCharts from 'apexcharts'
import { Plotly } from 'vue-plotly'

export default {
  name: 'mdb',
  components: {
    GChart,
    Plotly
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      load: '65',
      chartData: [
        ["Year", "Sales", "Expenses"],
        ["1", 1000, 400],
        ["2", 1170, 460],
        ["3", 660, 1120],
        ["4", 1030, 540]
      ],
      chartOptions: {
        chart: {
          title: "Company Performance",
          subtitle: "Sales, Expenses, and Profit: 2014-2017"
        }
      }
    //   datas:[{
    //     domain: { x: [0, 1], y: [0, 1] },
    //     value: 450,
    //     type: "indicator",
    //     mode: "gauge+number",
    //     delta: { reference: 400 },
    //     gauge: { axis: { range: [null, 500] } }
    //   }],
    //   layout:{
    //     width: 150,
    //     height: 150,
    //     margin: { t: 25, b: 25, l: 25, r: 25 },
    //     grid: { rows: 1, columns: 1, pattern: "independent" },
    //     template: {
    //         data: {
    //         indicator: [
    //             {
    //             // title: { text: "Speed" },
    //             mode: "number+delta+gauge",
    //             delta: { reference: 90 }
    //             }
    //         ]
    //         }
    //     }
    //   },
    //   chartOptions: {
    //     chart: {
    //       id: 'vuechart-example',
    //     },
    //     xaxis: {
    //       categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
    //     },
    //   },
    //   series: [{
    //     name: 'series-1',
    //     data: [30, 40, 45, 50, 49, 60, 70, 81]
    //   }]
    }
  }
}
</script>

<style>
.border-1 {
    border: 1px solid black;
    height: 75px;
}
.box {
    border-radius: 3px;
    background-color: black;
    height: 100px;
}
.border-left {
    border-right: 1px solid rgb(221, 212, 212);
}
.progress.is-small {
    height: .68rem;
}
.progress-wrapper .progress.is-small + .progress-value {
    color: #363636;
}
.mybox {
    border:1px solid black;
    height:50px;
    background-color: black;
    border-radius: 3px;
    height: auto;
}
#chart {
  max-width: 650px;
  margin: 35px auto;
}
</style>