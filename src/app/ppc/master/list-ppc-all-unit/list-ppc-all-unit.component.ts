import { Component, OnInit } from '@angular/core';
import { Utils } from 'src/app/utils';
declare var $:any;
@Component({
  selector: 'app-list-ppc-all-unit',
  templateUrl: './list-ppc-all-unit.component.html',
  styleUrls: ['./list-ppc-all-unit.component.css']
})
export class ListPpcAllUnitComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.allunitstable').html('');
    var allunit='';
    var allunitsrno=1;
    var allunits=Utils.get_all_units('All');
    if(allunits.length>0){
      $.each(allunits, function(index, element) {
        allunit+='<tr><td>'+allunitsrno+'</td>';
        allunit+='<td>'+element.UNIT_SYMBOL+'</td>';
        allunit+='<td>'+element.UNIT_FORMAL_NAME+'</td>';
        allunit+='<td><div class="btn-group m-b-5 m-r-5 dropup">'+
                  '<a href="javascript:;" class="btn btn-primary"><i class="fa fa-cog"></i></</a>'+
                  '<a href="javascript:;" data-toggle="dropdown" class="btn btn-primary dropdown-toggle"></a>'+
                  '<ul class="dropdown-menu pull-right">'+
                      '<li><a href="javascript:;"  class="editunitopenmodal" attr-id="'+element.UNIT_ID+'" attr-symbol="'+element.UNIT_SYMBOL+'" attr-formal="'+element.UNIT_FORMAL_NAME+'">Edit</a></li>'+
                      '<li><a href="javascript:void(0);" class="deleteunit" attr-id="'+element.UNIT_ID+'">Delete</a></li>'+
                  '</ul>'+
              '</div>'+
            '</td>';
            allunit+='</tr>';
          allunitsrno++;
      });
      $('.allunitstable').html(allunit);
    }
    Utils.intializedatatable();
  }
  ngAfterViewInit(){
    $(document).ready(function(){
      //for deleting group
      $('.deleteunit').on('click',function(){
        if(confirm("Are you sure want to delete")){
          var d=$(this);
          $.ajax({
            type: 'POST',
            url: Utils.delurl('ppc')+'delete_unit/'+$(this).attr('attr-id'),
            headers: {
            },
            beforeSend: function () {
              d.attr("disabled", "disabled");
              d.html("Please Wait...");
            },
            success: function (msg) {
              if(msg.status=="200"){
                Utils.notification('Success',"Deleted Successfully");
                location.reload();
              }else{
                d.attr("disabled", false);
                d.html("Delete");
                Utils.notification('Error',"Something Wents Wrong");
              }
            },
            error: function (msg) {
              d.attr("disabled", false);
              d.html("Delete");
              Utils.notification('Error',"Something wents wrong");
            }
          });
        }
      });
      //for opening edit model for group
      $('.editunitopenmodal').on('click',function(){
        $('#editunitmodel').modal('show');
        $('#editunitmodel').find('input[name="UNIT_ID"]').val($(this).attr('attr-id'));
        $('#editunitmodel').find('input[name="UNIT_SYMBOL"]').val($(this).attr('attr-symbol'));
        $('#editunitmodel').find('textarea[name="UNIT_FORMAL_NAME"]').html($(this).attr('attr-formal'));
      });
      //for editing the details
      $('#editunit').on('submit',function(e){
        e.preventDefault();
        $.ajax({
          type: 'POST',
          url: Utils.updateurl('ppc')+'edit_unit/'+$('#editunit').find('input[name="UNIT_ID"]').val(),
          data:$("#editunit").serialize(),
          headers: {
          },
          beforeSend: function () {
            $('.editunit').attr("disabled", "disabled");
            $('.editunit').html("Please Wait...");
          },
          success: function (msg) {
            if(msg.status=="200"){
              $('.editunit').attr("disabled", false);
              $('.editunit').html("Save");
              $('#editunit').trigger('reset');
              Utils.notification('Success',"Unit Updated Successfully");
              location.reload();
            }else if(msg.status=="409"){
              $('.editunit').attr("disabled", false);
              $('.editunit').html("Save");
              $('#editunit').trigger('reset');
              Utils.notification('Error',"Already Inserted");
            }else{
              $('.editunit').attr("disabled", false);
              $('.editunit').html("Save");
              Utils.notification('Error',"Something Wents Wrong");
            }
          },
          error: function (msg) {
            $('.editunit').attr("disabled", false);
            $('.editunit').html("Save");
            Utils.notification('Error',"Something wents wrong");
          }
        });
      });
    });
  }
 

}
