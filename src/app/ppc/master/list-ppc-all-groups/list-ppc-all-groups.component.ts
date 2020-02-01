import { Component, OnInit } from '@angular/core';
import { Utils } from 'src/app/utils';
declare var $:any;
@Component({
  selector: 'app-list-ppc-all-groups',
  templateUrl: './list-ppc-all-groups.component.html',
  styleUrls: ['./list-ppc-all-groups.component.css']
})
export class ListPpcAllGroupsComponent implements OnInit {
  constructor() { }
  ngOnInit() {
    $('.allgroupstable').html('');
    var allgroup='';
    var allgroupsrno=1;
    var allgroups=Utils.get_all_groups('All');
    if(allgroups.length>0){
      $.each(allgroups, function(index, element) {
        allgroup+='<tr><td>'+allgroupsrno+'</td>';
        allgroup+='<td>'+element.GROUP_NAME+'</td>';
        allgroup+='<td>'+element.GROUP_DESC+'</td>';
        allgroup+='<td>'+element.GROUP_PARENT_NAME+'</td>';
        allgroup+='<td><div class="btn-group m-b-5 m-r-5 dropup">'+
                        '<a href="javascript:;" class="btn btn-primary"><i class="fa fa-cog"></i></</a>'+
                        '<a href="javascript:;" data-toggle="dropdown" class="btn btn-primary dropdown-toggle"></a>'+
                        '<ul class="dropdown-menu pull-right">'+
                            '<li><a href="javascript:;"  class="editgroupopenmodal" attr-id="'+element.GROUP_ID+'" attr-name="'+element.GROUP_NAME+'" attr-under="'+element.GROUP_PARENT_ID+'" attr-desc="'+element.GROUP_DESC+'">Edit</a></li>'+
                            '<li><a href="javascript:void(0);" class="deletegroup" attr-id="'+element.GROUP_ID+'">Delete</a></li>'+
                        '</ul>'+
                    '</div>'+
                  '</td>';
        allgroup+='</tr>';
        allgroupsrno++;
      });
      $('.allgroupstable').html(allgroup);
      Utils.get_all_groups('GROUP_PARENT_ID');
    }
    Utils.intializedatatable();
  }
  ngAfterViewInit(){
    $(document).ready(function(){
      //for deleting group
      $('.deletegroup').on('click',function(){
        if(confirm("Are you sure want to delete")){
          var d=$(this);
          $.ajax({
            type: 'POST',
            url: Utils.delurl('ppc')+'delete_group/'+$(this).attr('attr-id'),
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
      $('.editgroupopenmodal').on('click',function(){
        $('#editgroupmodel').modal('show');
        $('#editgroupmodel').find('input[name="GROUP_ID"]').val($(this).attr('attr-id'));
        $('#editgroupmodel').find('input[name="GROUP_NAME"]').val($(this).attr('attr-name'));
        $('#editgroupmodel').find('textarea[name="GROUP_DESC"]').html($(this).attr('attr-desc'));
        $('#editgroupmodel').find('select[name="GROUP_PARENT_ID"] option[value=""]').remove();
        $('#editgroupmodel').find('select[name="GROUP_PARENT_ID"] option').attr('style','display:block;');
        if($(this).attr('attr-under')!=0){
          $('#editgroupmodel').find('select[name="GROUP_PARENT_ID"] option[value="'+$(this).attr('attr-id')+'"]').attr('style','display:none;');
          $('#editgroupmodel').find('select[name="GROUP_PARENT_ID"]').val($(this).attr('attr-under'));
        }else{
          $('#editgroupmodel').find('select[name="GROUP_PARENT_ID"]').prepend('<option value="">Select Group</option>');
          $('#editgroupmodel').find('select[name="GROUP_PARENT_ID"]').val('');
        }
      });
      //for editing the details
      $('#editgroup').on('submit',function(e){
        e.preventDefault();
        $.ajax({
          type: 'POST',
          url: Utils.updateurl('ppc')+'edit_group/'+$('#editgroup').find('input[name="GROUP_ID"]').val(),
          data:$("#editgroup").serialize(),
          headers: {
          },
          beforeSend: function () {
            $('.editgroup').attr("disabled", "disabled");
            $('.editgroup').html("Please Wait...");
          },
          success: function (msg) {
            if(msg.status=="200"){
              $('.editgroup').attr("disabled", false);
              $('.editgroup').html("Save");
              $('#editgroup').trigger('reset');
              Utils.notification('Success',"Group Updated Successfully");
              location.reload();
            }else if(msg.status=="409"){
              $('.editgroup').attr("disabled", false);
              $('.editgroup').html("Save");
              $('#editgroup').trigger('reset');
              Utils.notification('Error',"Already Inserted");
            }else{
              $('.editgroup').attr("disabled", false);
              $('.editgroup').html("Save");
              Utils.notification('Error',"Something Wents Wrong");
            }
          },
          error: function (msg) {
            $('.editgroup').attr("disabled", false);
            $('.editgroup').html("Save");
            Utils.notification('Error',"Something wents wrong");
          }
        });
      });
    });
  }
 
}
