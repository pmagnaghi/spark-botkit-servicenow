(function executeRule(current, previous /*null when async*/) {
	function getIncidentObject(incident) {
		return {
			type: 'Incident',
			alert_email: incident.caller_id.email.getDisplayValue(),
			parent: incident.parent.getDisplayValue(),
			made_sla: incident.made_sla.getDisplayValue(),
			caused_by: incident.caused_by.getDisplayValue(),
			watch_list: incident.watch_list.getDisplayValue(),
			upon_reject: incident.upon_reject.getDisplayValue(),
			sys_updated_on: incident.sys_updated_on.getDisplayValue(),
			child_incidents: incident.child_incidents.getDisplayValue(),
			hold_reason: incident.hold_reason.getDisplayValue(),
			approval_history: incident.approval_history.getDisplayValue(),
			skills: incident.skills.getDisplayValue(),
			number: incident.number.getDisplayValue(),
			resolved_by: incident.resolved_by.getDisplayValue(),
			sys_updated_by: incident.sys_updated_by.getDisplayValue(),
			opened_by: incident.opened_by.getDisplayValue(),
			user_input: incident.user_input.getDisplayValue(),
			sys_created_on: incident.sys_created_on.getDisplayValue(),
			state: incident.state.getDisplayValue(),
			sys_created_by: incident.sys_created_by.getDisplayValue(),
			knowledge: incident.knowledge.getDisplayValue(),
			order: incident.order.getDisplayValue(),
			calendar_stc: incident.calendar_stc.getDisplayValue(),
			closed_at: incident.closed_at.getDisplayValue(),
			cmdb_ci: incident.cmdb_ci.getDisplayValue(),
			delivery_plan: incident.delivery_plan.getDisplayValue(),
			impact: incident.impact.getDisplayValue(),
			active: incident.active.getDisplayValue(),
			work_notes_list: incident.work_notes_list.getDisplayValue(),
			business_service: incident.business_service.getDisplayValue(),
			priority: incident.priority.getDisplayValue(),
			sys_domain_path: incident.sys_domain_path.getDisplayValue(),
			rfc: incident.rfc.getDisplayValue(),
			time_worked: incident.time_worked.getDisplayValue(),
			expected_start: incident.expected_start.getDisplayValue(),
			opened_at: incident.opened_at.getDisplayValue(),
			business_duration: incident.business_duration.getDisplayValue(),
			group_list: incident.group_list.getDisplayValue(),
			work_end: incident.work_end.getDisplayValue(),
			caller_id: incident.caller_id.getDisplayValue(),
			resolved_at: incident.resolved_at.getDisplayValue(),
			approval_set: incident.approval_set.getDisplayValue(),
			subcategory: incident.subcategory.getDisplayValue(),
			work_notes: incident.work_notes.getDisplayValue(),
			short_description: incident.short_description.getDisplayValue(),
			close_code: incident.close_code.getDisplayValue(),
			correlation_display: incident.correlation_display.getDisplayValue(),
			delivery_task: incident.delivery_task.getDisplayValue(),
			work_start: incident.work_start.getDisplayValue(),
			assignment_group: incident.assignment_group.getDisplayValue(),
			additional_assignee_list: incident.additional_assignee_list.getDisplayValue(),
			business_stc: incident.business_stc.getDisplayValue(),
			description: incident.description.getDisplayValue(),
			calendar_duration: incident.calendar_duration.getDisplayValue(),
			close_notes: incident.close_notes.getDisplayValue(),
			notify: incident.notify.getDisplayValue(),
			sys_class_name: incident.sys_class_name.getDisplayValue(),
			closed_by: incident.closed_by.getDisplayValue(),
			follow_up: incident.follow_up.getDisplayValue(),
			parent_incident: incident.parent_incident.getDisplayValue(),
			sys_id: incident.sys_id.getDisplayValue(),
			contact_type: incident.contact_type.getDisplayValue(),
			incident_state: incident.incident_state.getDisplayValue(),
			urgency: incident.urgency.getDisplayValue(),
			problem_id: incident.problem_id.getDisplayValue(),
			company: incident.company.getDisplayValue(),
			reassignment_count: incident.reassignment_count.getDisplayValue(),
			activity_due: incident.activity_due.getDisplayValue(),
			assigned_to: incident.assigned_to.getDisplayValue(),
			severity: incident.severity.getDisplayValue(),
			comments: incident.comments.getDisplayValue(),
			approval: incident.approval.getDisplayValue(),
			sla_due: incident.sla_due.getDisplayValue(),
			comments_and_work_notes: incident.comments_and_work_notes.getDisplayValue(),
			due_date: incident.due_date.getDisplayValue(),
			sys_mod_count: incident.sys_mod_count.getDisplayValue(),
			reopen_count: incident.reopen_count.getDisplayValue(),
			sys_tags: incident.sys_tags.getDisplayValue(),
			escalation: incident.escalation.getDisplayValue(),
			upon_approval: incident.upon_approval.getDisplayValue(),
			correlation_id: incident.correlation_id.getDisplayValue(),
			location: incident.location.getDisplayValue(),
			category: incident.category.getDisplayValue()
		};
	}

	var restMessage = new sn_ws.RESTMessageV2();
	restMessage.setHttpMethod("post");
	restMessage.setEndpoint([YOUR_PUBLIC_FACING_URL]);
	restMessage.setRequestHeader('Content-Type', 'application/json');
	var body = {
		'new': getIncidentObject(current),
		'old': getIncidentObject(previous)
	};
	restMessage.setRequestBody(JSON.stringify(body));

	restMessage.execute();
})(current, previous);
