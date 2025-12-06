export function getComplaints() {
  return JSON.parse(localStorage.getItem("complaints") || "[]");
}

export function saveComplaint(data) {
  const all = getComplaints();
  all.push(data);
  localStorage.setItem("complaints", JSON.stringify(all));
}

export function updateComplaint(index, newData) {
  const all = getComplaints();
  all[index] = newData;
  localStorage.setItem("complaints", JSON.stringify(all));
}

export function deleteComplaint(index) {
  const all = getComplaints();
  all.splice(index, 1);
  localStorage.setItem("complaints", JSON.stringify(all));
}