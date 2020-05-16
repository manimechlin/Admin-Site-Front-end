import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { User } from '../../services/Data/Users';
import { CommonService } from '../../services/common.service';
import { Group } from '../../services/Data/Groups';
import { OrgChartM } from '../../services/Data/OrgChartsData';
import { UtilityService } from '../../shared/utils/utility.service';
import { NewOrgCharts, NewOrgData } from '../../services/Data/newOrgData';
import { parse } from 'path';
import { updateNamespaceExportDeclaration } from 'typescript';
declare const dhx: any;
declare const $: any;

@Component({
    selector: 'app-org-demo-component',
    templateUrl: './org-demo.component.html',
    styleUrls: ['./org-demo.component.css']
})


export class OrgDemoComponent implements OnInit {
    public orgData: OrgChartM[];
    public newOrgData: NewOrgData[];
    closeResult: string;
    public users: User[];
    public groups: Group[];
    public selectedUser: number = 0;
    public selectedOrgUser: any = 0;
    public selectedgroup: any = 0;
    public activeUser: User;
    public activeOrgUser: OrgChartM;
    public throughGraph: boolean = true;
    public viewDetail: boolean = false;
    public addUToDemo: boolean = false;
    public nodeID: any;
    public UserData:OrgChartM;
    public data=[{
id: "",
text: "",
title: "",
img: "",
parent: ""
    }]

    constructor(
        private modalService: NgbModal,
        private http: HttpClient,
        private utilitySvc: UtilityService,
        private _commonService: CommonService,
        @Inject('BASE_URL') baseUrl: string
    ) { }
    ngOnInit() {
        this.users = JSON.parse(localStorage.getItem('users'));
        this.orgData = JSON.parse(localStorage.getItem('orgChart'));
        this.groups = JSON.parse(localStorage.getItem('Groups'));
        this.newOrgData = JSON.parse(localStorage.getItem('newOrgData'));
        this.fetchDemoChart();
    }


    fetchDemoChart(){
        let that = this;
        var diagram = new dhx.Diagram("diagram_container", {
            type: "org",
            defaultShapeType: "img-card",
            scale: 1,
            select: true,
            margin: {
                y: 65
            },
            toolbar: [
                {
                    id: "detail",
                    content: "<i class='zmdi zmdi-folder-person'></i></i>"
                },
                {
                    id: "add",
                    content: "<i class='zmdi zmdi-account-add'></i></i>"
                },

                {
                    id: "delete",
                    content: "<i class='zmdi zmdi-delete'></i>"
                },
                {
                    id: "info",
                    content: "<i class='zmdi zmdi-info-outline'></i>"
                },
                {
                    id: "more",
                    content: "<i class='zmdi zmdi-more'></i>"
                }
            ]
        });
        diagram.events.on("ShapeIconClick", function (icon) {
            debugger
            var id = diagram.selection.getId();

            if (icon == "detail") {
                debugger
                that._commonService.getDemoChart(id).subscribe((res) => {
                    that.UserData=res;
                    console.log(that.UserData)
                })
                console.log(this.UserData)
                that.callDetailHandler(id);

            }
            if (icon == "add") {
                debugger
                that.callAddHandler(id);
                //alert(icon + " was clicked for id = " + id);
                // var pid=parseFloat(id)
                //    var cid=pid+.1;
                //    that.data=JSON.parse(localStorage.getItem('newOrgData'))
                //    console.log(that.data);
                //    that.data=[{
                //     id:cid.toString(),
                //     text: "Manager",
                //     title: "New User",
                //     img: "https://balkangraph.com/js/img/16.jpg",
                //     parent:pid.toString()
                //    }]
                //    console.log(that.data);
                //    localStorage.setItem('newOrgData', JSON.stringify(that.data));
                }
            if (icon == "delete") {
                    diagram.data.remove(id);
                }
            if (icon == "info") {
                alert(icon + " was clicked for id = " + id);

            }
           
            if (icon == "more") {
                alert(icon + " was clicked for id = " + id);

            }
        });

        diagram.data.parse(this.newOrgData);


    }
    callAddHandler(id){
        this.nodeID = id;
        this.addUToDemo = true;
        $('#addUToDemo').click();
    }
    callDetailHandler(id){
        this.viewDetail=true;
        $('#viewDetail').click();
    }
        
    open(content, type, modalDimension, option) {
        if (option == 1) {
            this.addUToDemo = true;
        } 
        else if(option == 2){
            this.viewDetail=true;
        }
        if (modalDimension === 'sm' && type === 'modal_mini') {
            this.modalService.open(content, { windowClass: 'modal-mini', size: 'sm', centered: true }).result.then((result) => {
                this.closeResult = `Closed with: ${result}`;
            }, (reason) => {
                this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
            });
        } else if (modalDimension === '' && type === 'Notification') {
            this.modalService.open(content, { windowClass: 'modal-danger', centered: true }).result.then((result) => {
                this.closeResult = `Closed with: ${result}`;
            }, (reason) => {
                this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
            });
        } else {
            debugger
            this.modalService.open(content, { centered: true }).result.then((result) => {
                this.closeResult = `Closed with: ${result}`;
            }, (reason) => {
                this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
            });
        }
    }
        private getDismissReason(reason: any): string {
            if (reason === ModalDismissReasons.ESC) {
                return 'by pressing ESC';
            } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
                return 'by clicking on a backdrop';
            } else {
                return `with: ${reason}`;
            }
        }
    }

