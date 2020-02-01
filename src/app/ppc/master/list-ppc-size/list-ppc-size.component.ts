import { Component, OnInit } from '@angular/core';
import { Utils } from 'src/app/utils';
declare var $:any;
@Component({
  selector: 'app-list-ppc-size',
  templateUrl: './list-ppc-size.component.html',
  styleUrls: ['./list-ppc-size.component.css']
})
export class ListPpcSizeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.allsizetable').html('');
    var allsize='';
    var allsizesrno=1;
    var allsizes=Utils.get_all_size('All');
    if(allsizes.length>0){
      $.each(allsizes, function(index, element) {
        allsize+='<tr><td>'+allsizesrno+'</td>';
        allsize+='<td>'+element.SIZE_NAME+'</td>';
        allsize+='<td>'+element.UNIT_NAME+'</td>';
        allsize+='<td>'+element.SIZE_DESC+'</td>';
        allsize+='<td><div class="btn-group m-b-5 m-r-5 dropup">'+
                  '<a href="javascript:;" class="btn btn-primary"><i class="fa fa-cog"></i></</a>'+
                  '<a href="javascript:;" data-toggle="dropdown" class="btn btn-primary dropdown-toggle"></a>'+
                  '<ul class="dropdown-menu pull-right">'+
                      '<li><a href="javascript:;"  class="editsizeopenmodal" attr-id="'+element.SIZE_ID+'" attr-name="'+element.SIZE_NAME+'" attr-desc="'+element.SIZE_DESC+'" attr-unitid="'+element.UNIT_ID+'">Edit</a></li>'+
                      '<li><a href="javascript:void(0);" class="deletesize" attr-id="'+element.SIZE_ID+'">Delete</a></li>'+
                  '</ul>'+
              '</div>'+
            '</td>';
            allsize+='</tr>';
            allsizesrno++;
      });
      Utils.get_all_units('UNIT_ID');
      $('.allsizetable').html(allsize);
    }
    
    Utils.intializedatatable();
  }
  ngAfterViewInit(){
    $(document).ready(function(){
      //for deleting group
      $('.deletesize').on('click',function(){
        if(confirm("Are you sure want to delete")){
          var d=$(this);
          $.ajax({
            type: 'POST',
            url: Utils.delurl('ppc')+'delete_size/'+$(this).attr('attr-id'),
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
      $('.editsizeopenmodal').on('click',function(){
        $('#editsizemodel').modal('show');
        $('#editsizemodel').find('input[name="SIZE_ID"]').val($(this).attr('attr-id'));
        $('#editsizemodel').find('input[name="SIZE_NAME"]').val($(this).attr('attr-name'));
        $('#editsizemodel').find('select[name="UNIT_ID"]').val($(this).attr('attr-unitid'));
        $('#editsizemodel').find('textarea[name="SIZE_DESC"]').html($(this).attr('attr-desc'));
      });
      //for editing the details
      $('#editsize').on('submit',function(e){
        e.preventDefault();
        $.ajax({
          type: 'POST',
          url: Utils.updateurl('ppc')+'edit_size/'+$('#editsize').find('input[name="SIZE_ID"]').val(),
          data:$("#editsize").serialize(),
          headers: {
          },
          beforeSend: function () {
            $('.editsize').attr("disabled", "disabled");
            $('.editsize').html("Please Wait...");
          },
          success: function (msg) {
            if(msg.status=="200"){
              $('.editsize').attr("disabled", false);
              $('.editsize').html("Save");
              $('#editsize').trigger('reset');
              Utils.notification('Success',"Size Updated Successfully");
              location.reload();
            }else if(msg.status=="409"){
              $('.editsize').attr("disabled", false);
              $('.editsize').html("Save");
              $('#editsize').trigger('reset');
              Utils.notification('Error',"Already Inserted");
            }else{
              $('.editsize').attr("disabled", false);
              $('.editsize').html("Save");
              Utils.notification('Error',"Something Wents Wrong");
            }
          },
          error: function (msg) {
            $('.editsize').attr("disabled", false);
            $('.editsize').html("Save");
            Utils.notification('Error',"Something wents wrong");
          }
        });
      });
    });
  }
}
